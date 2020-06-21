import { Directive, Input, OnInit, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';

import { DynamicTextInputComponent } from '../../fields/inputs/dynamic-text-input/dynamic-text-input.component';
import { TextInputWrapperComponent } from '../../fields/wrappers/text-input-wrapper/text-input-wrapper.component';
import { JcFormGroup } from '../../extentions/jc-form-group';
import { JcFormControl } from '../../extentions/jc-form-control';

@Directive({
  selector: '[jcDynamicInput]'
})
export class JcDynamicInputDirective implements OnInit {
  mapper = {
    text: DynamicTextInputComponent
  }
  @Input() jcFormGroup: JcFormGroup;
  @Input() jcFormControl: JcFormControl;

  private cRef: ComponentRef<any>

  constructor(
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }

  ngOnInit() {
    let factory = this.cfr.resolveComponentFactory(TextInputWrapperComponent);
    this.cRef = this.vcr.createComponent(factory);
    this.cRef.instance.jcFormGroup = this.jcFormGroup;
    this.cRef.instance.jcFormControl = this.jcFormControl;
  }
}

import { Directive, Input, OnInit, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';

import { JcFormGroup } from '../../extentions/jc-form-group';
import { JcFormControl } from '../../extentions/jc-form-control';

import { TextInputWrapperComponent } from '../../fields/wrappers/text-input-wrapper/text-input-wrapper.component';
import { NumberInputWrapperComponent } from '../../fields/wrappers/number-input-wrapper/number-input-wrapper.component'

@Directive({
  selector: '[jcDynamicInput]'
})
export class JcDynamicInputDirective implements OnInit {

  mapper = {
    text: TextInputWrapperComponent,
    number: NumberInputWrapperComponent
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

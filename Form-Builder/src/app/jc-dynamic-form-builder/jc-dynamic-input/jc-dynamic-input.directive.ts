import { Directive, Input, OnInit, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { DynamicTextInputComponent } from '../inputs/dynamic-text-input/dynamic-text-input.component';
import { JcInputOptions } from '../jc-input-options/jc-input-options';
import { TextInputWrapperComponent } from '../wrappers/text-input-wrapper/text-input-wrapper.component';

@Directive({
  selector: '[jcDynamicInput]'
})
export class JcDynamicInputDirective implements OnInit {
  mapper = {
    text: DynamicTextInputComponent
  }
  @Input() group;
  @Input() options: JcInputOptions;

  private cRef: ComponentRef<any>

  constructor(
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }

  ngOnInit() {
    let factory = this.cfr.resolveComponentFactory(TextInputWrapperComponent);
    this.cRef = this.vcr.createComponent(factory);
    this.cRef.instance.group = this.group;
    this.cRef.instance.options = this.options;
    console.log(this.options)
  }
}

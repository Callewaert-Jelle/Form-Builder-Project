import { Directive, Input, OnInit, ComponentFactoryResolver, ComponentRef, ViewContainerRef } from '@angular/core';
import { DynamicTextInputComponent } from '../inputs/dynamic-text-input/dynamic-text-input.component';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[jcDynamicInput]'
})
export class JcDynamicInputDirective implements OnInit {
  mapper = {
    text: DynamicTextInputComponent
  }
  @Input() group;

  private cRef: ComponentRef<any>

  constructor(
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) { }

  ngOnInit() {
    let factory = this.cfr.resolveComponentFactory(DynamicTextInputComponent);
    this.cRef = this.vcr.createComponent(factory);
    this.cRef.instance.group = this.group;
  }
}

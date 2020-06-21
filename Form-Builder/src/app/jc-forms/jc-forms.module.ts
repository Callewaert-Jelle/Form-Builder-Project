import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './core/jc-dynamic-form/jc-dynamic-form.component';
import { DynamicTextInputComponent } from './fields/inputs/dynamic-text-input/dynamic-text-input.component';
import { JcDynamicInputDirective } from './core/jc-dynamic-input/jc-dynamic-input.directive';
import { TextInputWrapperComponent } from './fields/wrappers/text-input-wrapper/text-input-wrapper.component';

@NgModule({
  declarations: [
    DynamicFormComponent, 
    DynamicTextInputComponent,
    JcDynamicInputDirective,
    TextInputWrapperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent,
    DynamicTextInputComponent
  ],
  entryComponents: [
    TextInputWrapperComponent
  ]
})
export class JcFormsModule { }
export * from './core/jc-dynamic-form/jc-dynamic-form.component'

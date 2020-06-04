import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './jc-dynamic-form/jc-dynamic-form.component';
import { DynamicTextInputComponent } from './inputs/dynamic-text-input/dynamic-text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JcDynamicInputDirective } from './jc-dynamic-input/jc-dynamic-input.directive';
import { JcTextInputOptions } from './jc-input-options/jc-custom-input-options/jc-text-input-options';
import { TextInputWrapperComponent } from './wrappers/text-input-wrapper/text-input-wrapper.component';

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
export class JcFormBuilderModule { }
export * from './jc-form-builder/jc-form-builder'

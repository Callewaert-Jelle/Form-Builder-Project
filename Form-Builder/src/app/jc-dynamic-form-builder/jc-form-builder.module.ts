import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './jc-dynamic-form/jc-dynamic-form.component';
import { DynamicTextInputComponent, DynamicTextInputTypes } from './inputs/dynamic-text-input/dynamic-text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JcFormBuilder } from './jc-form-builder/jc-form-builder';
import { JcDynamicInputDirective } from './jc-dynamic-input/jc-dynamic-input.directive';

@NgModule({
  declarations: [
    DynamicFormComponent, 
    DynamicTextInputComponent,
    JcDynamicInputDirective
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
    DynamicTextInputComponent
  ]
})
export class JcFormBuilderModule { }
export * from './jc-form-builder/jc-form-builder'

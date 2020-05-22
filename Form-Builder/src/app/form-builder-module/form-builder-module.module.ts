import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicTextInputComponent } from './dynamic-inputs/dynamic-text-input/dynamic-text-input.component';



@NgModule({
  declarations: [
    DynamicFormComponent, 
    DynamicTextInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicFormComponent,
    DynamicTextInputComponent
  ]
})
export class FormBuilderModuleModule { }

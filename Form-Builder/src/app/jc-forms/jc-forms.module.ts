import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './core/jc-dynamic-form/jc-dynamic-form.component';
import { JcDynamicInputDirective } from './core/jc-dynamic-input/jc-dynamic-input.directive';

import { TextInputComponent } from './fields/inputs/text-input/text-input.component';
import { TextInputWrapperComponent } from './fields/wrappers/text-input-wrapper/text-input-wrapper.component';
import { NumberInputComponent } from './fields/inputs/number-input/number-input.component';
import { NumberInputWrapperComponent } from './fields/wrappers/number-input-wrapper/number-input-wrapper.component';
import { DropdownInputComponent } from './fields/inputs/dropdown-input/dropdown-input.component';
import { DropdownInputWrapperComponent } from './fields/wrappers/dropdown-input-wrapper/dropdown-input-wrapper.component';
import { DatepickerInputComponent } from './fields/inputs/datepicker-input/datepicker-input.component';
import { DatepickerInputWrapperComponent } from './fields/wrappers/datepicker-input-wrapper/datepicker-input-wrapper.component';
import { SliderInputComponent } from './fields/inputs/slider-input/slider-input.component';
import { SliderInputWrapperComponent } from './fields/wrappers/slider-input-wrapper/slider-input-wrapper.component';
import { WysiwygInputComponent } from './fields/inputs/wysiwyg-input/wysiwyg-input.component';
import { WysiwygInputWrapperComponent } from './fields/wrappers/wysiwyg-input-wrapper/wysiwyg-input-wrapper.component';

@NgModule({
  declarations: [
    DynamicFormComponent, 
    TextInputComponent,
    JcDynamicInputDirective,
    TextInputWrapperComponent,
    NumberInputComponent,
    NumberInputWrapperComponent,
    DropdownInputComponent,
    DropdownInputWrapperComponent,
    DatepickerInputComponent,
    DatepickerInputWrapperComponent,
    SliderInputComponent,
    SliderInputWrapperComponent,
    WysiwygInputComponent,
    WysiwygInputWrapperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent,
    TextInputComponent
  ],
  entryComponents: [
    TextInputWrapperComponent
  ]
})
export class JcFormsModule { }
export * from './core/jc-dynamic-form/jc-dynamic-form.component'

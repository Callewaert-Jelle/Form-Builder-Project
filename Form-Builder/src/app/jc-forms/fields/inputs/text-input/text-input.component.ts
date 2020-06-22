import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import { JcFormGroup } from '../../../extentions/jc-form-group';
import { JcFormControl } from '../../../extentions/jc-form-control';

export enum DynamicTextInputTypes {
  text = 'text',
  number = 'number',
  password = 'password',
  email = 'email',
  color = 'color'
}

@Component({
  selector: 'jc-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit, ControlValueAccessor {

  private value: string;

  @Input() jcFormGroup: JcFormGroup;
  @Input() jcFormControl: JcFormControl;

  @Input() placeholder?: string;
  @Input() isDisabled?: boolean;
  @Input() isReadonly?: boolean;
  @Input() hasAutocomplete?: boolean;
  @Input() type?: DynamicTextInputTypes;
  @Input() pattern?: RegExp;

  constructor() { }

  ngOnInit() {
    if (!this.value) {
      this.value = this.jcFormControl.value
    }
    if (!this.type) {
      this.type = DynamicTextInputTypes.text
    }
  }

  writeValue(input: string) {
    this.value = input;
  }
  registerOnChange() { }
  registerOnTouched() { }
}

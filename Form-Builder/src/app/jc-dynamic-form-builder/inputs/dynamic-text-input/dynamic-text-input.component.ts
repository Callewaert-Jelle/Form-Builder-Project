import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { JcFormControl } from '../../jc-form-elements/jc-form-control';
import { JcFormGroup } from '../../jc-form-elements/jc-form-group';

export enum DynamicTextInputTypes {
  text = 'text',
  number = 'number',
  password = 'password',
  email = 'email',
  color = 'color'
}

@Component({
  selector: 'app-dynamic-text-input',
  templateUrl: './dynamic-text-input.component.html',
  styleUrls: ['./dynamic-text-input.component.css']
})
export class DynamicTextInputComponent implements OnInit, ControlValueAccessor {

  private value: string;

  @Input() jcFormControl: JcFormControl;
  @Input() jcFormGroup: JcFormGroup;

  @Input() placeholder?: string;
  @Input() isDisabled?: boolean;
  @Input() isReadonly?: boolean;
  @Input() hasAutocomplete?: boolean;
  @Input() type?: DynamicTextInputTypes;
  @Input() pattern?: RegExp;

  constructor() { }

  ngOnInit() {
    console.log(this.jcFormControl)
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

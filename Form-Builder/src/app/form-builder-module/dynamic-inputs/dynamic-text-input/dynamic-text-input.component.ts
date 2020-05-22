import { Component, OnInit, Input } from '@angular/core';

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
export class DynamicTextInputComponent implements OnInit {

  @Input() placeholder?: string;
  @Input() isDisabled?: boolean;
  @Input() isReadonly?: boolean;
  @Input() hasAutocomplete?: boolean;
  @Input() type?: DynamicTextInputTypes;
  @Input() pattern?: RegExp;

  constructor() { }

  ngOnInit() {
    if (!this.type) {
      this.type = DynamicTextInputTypes.text
    }
  }
}

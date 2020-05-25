import { Component, OnInit } from '@angular/core';
import { DynamicTextInputTypes } from './jc-dynamic-form-builder/inputs/dynamic-text-input/dynamic-text-input.component';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { JcFormBuilder } from './jc-dynamic-form-builder/jc-form-builder/jc-form-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formContainer: FormArray; // FormGroup

  text_placeholder: string;
  text_type: DynamicTextInputTypes;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.formContainer = new JcFormBuilder(this.formBuilder).addTextInput('name').getResult(); // FormBuilder (pattern)
    this.text_placeholder = "placeholder";
    this.text_type = DynamicTextInputTypes.text;
  }
}

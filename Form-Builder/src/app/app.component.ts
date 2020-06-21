import { Component, OnInit } from '@angular/core';
import { DynamicTextInputTypes } from './jc-dynamic-form-builder/inputs/dynamic-text-input/dynamic-text-input.component';
import { JcFormBuilder } from './jc-dynamic-form-builder/jc-form-builder/jc-form-builder';
import { JcFormGroup } from './jc-dynamic-form-builder/jc-form-elements/jc-form-group';
import { JcTextInputOptions } from './jc-dynamic-form-builder/jc-input-options/jc-custom-input-options/jc-text-input-options';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  objectEntries = Object.entries;

  jcFormGroup: JcFormGroup;

  text_placeholder: string;
  text_type: DynamicTextInputTypes;

  ngOnInit() {
    this.jcFormGroup = new JcFormBuilder()
      .addTextInput('name', new JcTextInputOptions('name', 'name')
        .addPlaceholder('xD')
        .makeDisabled())
      .addTextInput('email', new JcTextInputOptions('email', 'email')
        .addType(DynamicTextInputTypes.password),
        Validators.required)
      .addTextInput('more', new JcTextInputOptions('more', ''))
      .getResult();
  }

  submitForm() {
    console.log(this.jcFormGroup)
  }
}

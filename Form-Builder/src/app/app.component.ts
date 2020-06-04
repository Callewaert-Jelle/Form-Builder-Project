import { Component, OnInit } from '@angular/core';
import { DynamicTextInputTypes } from './jc-dynamic-form-builder/inputs/dynamic-text-input/dynamic-text-input.component';
import { JcFormBuilder } from './jc-dynamic-form-builder/jc-form-builder/jc-form-builder';
import { JcFormGroup } from './jc-dynamic-form-builder/jc-form-elements/jc-form-group';
import { JcTextInputOptions } from './jc-dynamic-form-builder/jc-input-options/jc-custom-input-options/jc-text-input-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formContainer: JcFormGroup;

  text_placeholder: string;
  text_type: DynamicTextInputTypes;

  ngOnInit() {
    this.formContainer = new JcFormBuilder()
      .addTextInput('name', new JcTextInputOptions()
        .addValue('xD')
        .addPlaceholder('xD'))
      .addTextInput('email', new JcTextInputOptions()
        .addType(DynamicTextInputTypes.password))
      .addTextInput('more')
      .getResult();
    console.log(this.formContainer)
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormArray } from '@angular/forms'

@Component({
  selector: 'jc-dynamic-form',
  templateUrl: './jc-dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

  @Input() formContainer: FormArray;
  inputs: any[];

  constructor() {
  }

  ngOnInit() {
    this.inputs = [this.formContainer.controls];
  }
}

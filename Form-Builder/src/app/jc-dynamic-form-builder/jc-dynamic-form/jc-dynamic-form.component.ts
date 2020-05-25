import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormArray } from '@angular/forms'

@Component({
  selector: 'jc-dynamic-form',
  templateUrl: './jc-dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

  @Input() formContainer: FormArray;

  constructor() {
  }

  ngOnInit() {
  }
}

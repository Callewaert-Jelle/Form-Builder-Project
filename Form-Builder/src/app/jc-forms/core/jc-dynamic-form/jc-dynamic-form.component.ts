import { Component, OnInit, Input } from '@angular/core';
import { JcFormGroup } from '../../extentions/jc-form-group';

@Component({
  selector: 'jc-dynamic-form',
  templateUrl: './jc-dynamic-form.component.html'
})
export class DynamicFormComponent implements OnInit {

  @Input() jcFormGroup: JcFormGroup;
  
  objectKeys = Object.keys;

  constructor() {
  }

  ngOnInit() {
    
  }
}

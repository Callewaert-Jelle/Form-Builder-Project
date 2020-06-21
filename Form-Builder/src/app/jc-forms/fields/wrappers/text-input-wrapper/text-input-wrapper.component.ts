import { Component, OnInit, Input } from '@angular/core';

import { JcFormGroup } from '../../../extentions/jc-form-group';
import { JcFormControl } from '../../../extentions/jc-form-control';

@Component({
  selector: 'app-text-input-wrapper',
  templateUrl: './text-input-wrapper.component.html',
  styleUrls: ['./text-input-wrapper.component.css']
})
export class TextInputWrapperComponent implements OnInit {

  @Input() jcFormGroup: JcFormGroup;
  @Input() jcFormControl: JcFormControl;

  constructor() { }

  ngOnInit() {
  }

}

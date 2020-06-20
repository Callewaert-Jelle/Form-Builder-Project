import { Component, OnInit, Input } from '@angular/core';
import { JcFormGroup } from '../../jc-form-elements/jc-form-group';
import { JcFormControl } from '../../jc-form-elements/jc-form-control';

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

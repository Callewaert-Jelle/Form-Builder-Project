import { Component, OnInit, Input } from '@angular/core';
import { JcInputOptions } from '../../jc-input-options/jc-input-options';

@Component({
  selector: 'app-text-input-wrapper',
  templateUrl: './text-input-wrapper.component.html',
  styleUrls: ['./text-input-wrapper.component.css']
})
export class TextInputWrapperComponent implements OnInit {

  @Input() group;
  @Input() options: JcInputOptions;

  constructor() { }

  ngOnInit() {
  }

}

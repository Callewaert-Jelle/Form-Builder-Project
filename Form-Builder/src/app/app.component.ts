import { Component, OnInit } from '@angular/core';
import { DynamicTextInputTypes } from './form-builder-module/dynamic-inputs/dynamic-text-input/dynamic-text-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  text_placeholder: string;
  text_type: DynamicTextInputTypes;

  ngOnInit() {
    this.text_placeholder = "placeholder"
    this.text_type = DynamicTextInputTypes.text
  }
}

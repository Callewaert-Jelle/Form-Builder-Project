import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jc-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.css']
})
export class NumberInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKeyDown(event) {
    console.log(event)
  }

}

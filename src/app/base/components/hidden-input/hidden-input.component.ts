import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../base-component/base-component.component';

@Component({
  selector: 'hidden-input',
  templateUrl: './hidden-input.component.html',
  styleUrls: ['./hidden-input.component.scss']
})
export class HiddenInputComponent extends BaseComponent implements OnInit {

  @ViewChild('inputField') inputField: ElementRef;

  constructor() { super() }

  ngOnInit(): void {
  }

  toggleVisibility() {
    const inputEle = this.inputField.nativeElement;
    if (inputEle.type === "password") {
      inputEle.type = "text";
    } else {
      inputEle.type = "password";
    }
  }

}

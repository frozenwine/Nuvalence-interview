import { DatePipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ValidateMessage } from '../../validation/ValidateMessage';
//import { ValidateMessage } from '../../validation/ValidateMessage';

@Component({
  selector: 'base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss']
})
export class BaseComponent implements OnInit {
  @Input('label') label: string;
  @Input('placeholder') placeholder: string;
  @Input('dataControl') dataControl: FormControl;

  baseFormGroup : FormGroup;

  constructor() { }

  ngOnInit() {
  }

  isValidFeild(field){
    var fieldControl = this.baseFormGroup.controls[field];
    return fieldControl.invalid && (fieldControl.touched || fieldControl.dirty);
  }

  getErrorMessage(){
    return ValidateMessage.getErrorMessage(<FormControl>this.dataControl);
  }

}

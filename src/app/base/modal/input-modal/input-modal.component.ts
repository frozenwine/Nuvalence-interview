import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputModel } from '../../model/input.model';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {

  inputControl = new FormControl('', Validators.required);

  constructor(public dialogRef: MatDialogRef<InputModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InputModel) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onOKClick(): void {
    this.dialogRef.close(this.inputControl.value);
  }

}

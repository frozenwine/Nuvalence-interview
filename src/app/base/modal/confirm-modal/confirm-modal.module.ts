import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ConfirmModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class ConfirmModalModule { }

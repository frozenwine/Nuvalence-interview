import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModalComponent } from './input-modal.component';
import { BaseInputModule } from '../../components/base-input/base-input.module';



@NgModule({
  declarations: [InputModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    BaseInputModule
  ]
})
export class InputModalModule { }

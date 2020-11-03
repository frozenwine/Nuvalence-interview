import { ConfirmModalModule } from './../base/modal/confirm-modal/confirm-modal.module';
import { InputModalModule } from './../base/modal/input-modal/input-modal.module';
import { TaskRoutingModule } from './task-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { GeneralModule } from '../base/general.module';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    GeneralModule,
    InputModalModule,
    ConfirmModalModule
  ],
  exports: [TaskComponent]
})
export class TaskModule { }

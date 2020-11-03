import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskRoutingModule } from './task-routing.module';
import { MaterialModule } from './../base/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports: [TaskComponent]
})
export class TaskModule { }

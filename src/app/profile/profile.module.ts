import { MaterialModule } from './../base/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BaseInputModule } from './../base/components/base-input/base-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    BaseInputModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }

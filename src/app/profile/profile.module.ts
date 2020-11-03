import { BaseInputModule } from './../base/components/base-input/base-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { GeneralModule } from '../base/general.module';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    BaseInputModule,
    GeneralModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }

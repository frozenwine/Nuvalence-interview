import { SignupComponent } from './signup.component';
import { HiddenInputModule } from './../components/hidden-input/hidden-input.module';
import { BaseInputModule } from './../components/base-input/base-input.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { GeneralModule } from '../general.module';


@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    SignupRoutingModule,
    GeneralModule,
    BaseInputModule,
    HiddenInputModule
  ],
  exports: [SignupComponent]
})
export class SignupModule { }

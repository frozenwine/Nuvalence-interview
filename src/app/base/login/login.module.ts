import { BaseInputModule } from './../components/base-input/base-input.module';
import { HiddenInputModule } from './../components/hidden-input/hidden-input.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '../general.module';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    GeneralModule,
    HiddenInputModule,
    BaseInputModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }

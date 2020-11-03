import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from './../base/material.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../base/general.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GeneralModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

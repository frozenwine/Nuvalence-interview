import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestPageRoutingModule } from './test-page-routing.module';
import { TestPageComponent } from './test-page.component';


@NgModule({
  declarations: [TestPageComponent],
  imports: [
    CommonModule,
    TestPageRoutingModule
  ]
})
export class TestPageModule { }

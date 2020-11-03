import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnNgIdleService } from 'bn-ng-idle';
import { BaseRoutingModule } from './base-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoginGuard } from './service/login.guard';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    MaterialModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    MainComponent
  ],
  providers:[
    BnNgIdleService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    LoginGuard
  ],
  entryComponents: [
    
  ]
})
export class BaseModule { }

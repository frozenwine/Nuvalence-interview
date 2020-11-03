import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { BaseInputModule } from './components/base-input/base-input.module';
import { ConfirmModalModule } from './modal/confirm-modal/confirm-modal.module';
import { ConfirmModalComponent } from './modal/confirm-modal/confirm-modal.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnNgIdleService } from 'bn-ng-idle';
import { BaseRoutingModule } from './base-routing.module';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { LoginGuard } from './service/login.guard';
import { InputModalModule } from './modal/input-modal/input-modal.module';
import { HiddenInputModule } from './components/hidden-input/hidden-input.module';

@NgModule({
  declarations: [
    MainComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    ConfirmModalModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BaseInputModule,
    HttpClientModule,
    InputModalModule,
    MaterialModule,
    HiddenInputModule,
    RouterModule
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
    ConfirmModalComponent
  ]
})
export class BaseModule { }

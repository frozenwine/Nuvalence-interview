import { ProfileComponent } from './../profile/profile.component';
import { HomeComponent } from './../home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './service/login.guard';
import { TaskComponent } from '../task/task.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    canActivate: [LoginGuard],
    loadChildren: ()=> import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'task',
    canActivate: [LoginGuard],
    loadChildren: ()=> import('src/app/task/task.module').then(m => m.TaskModule)
  },
  {
    path: 'profile',
    canActivate: [LoginGuard],
    loadChildren: ()=> import('src/app/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'test',
    //canActivate: [LoginGuard],
    loadChildren: ()=> import('src/app/test-page/test-page.module').then(m => m.TestPageModule)
  },
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}


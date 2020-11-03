import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './service/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { 
    path: 'login',     
    loadChildren: ()=> import('src/app/base/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: ()=> import('src/app/base/signup/signup.module').then(m => m.SignupModule)
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
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}


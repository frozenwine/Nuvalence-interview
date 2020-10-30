import { NotificationService } from './../service/notification.service';
import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private loginService: LoginService,
    private notif: NotificationService) { }

  ngOnInit(): void {
    if(this.loginService.isAuthenticated()) {
      this.router.navigate(['home']);
    }
    
    this.loginFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  loginClicked() {
    this.loginService.login(this.loginFormGroup.value).subscribe(
      res => {
        console.log(res);
        if(res[environment.AUTH_TOKEN]){
            this.loginService.initUser(res);
            this.router.navigate(['home']);
            this.notif.notif('Welcome ' + this.loginService.userName);
        }
      },
      err => this.notif.notifErr(err)
    );;
  }

  signupClicked() {
    this.router.navigate(['signup']);
  }
}

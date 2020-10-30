import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  signupClicked() {
    console.log(this.signupForm.value)
    this.loginService.signup(this.signupForm.value).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  loginClicked() {
    this.router.navigate(['login']);
  }
}

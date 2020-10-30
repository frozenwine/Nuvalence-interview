import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { MainComponent } from '../main/main.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mainComponent: MainComponent;
  userName : string = null;
  token : string = null;
  signupUrl = 'user/register';
  loginUrl= 'user/login';
  logoutUrl = 'user/logout';
  

  constructor(private httpClient: HttpClient, private router: Router) { 
    this.token = localStorage.getItem(environment.AUTH_TOKEN);
    this.userName = localStorage.getItem(environment.USER_NAME);
  }

  signup(userCredential) {
    return this.httpClient.post(this.signupUrl, userCredential);
  }

  login(userCredential){
    console.log('login: ', userCredential);
    this.httpClient.post(this.loginUrl, userCredential).subscribe(
      res => {
        console.log(res);
        if(res[environment.AUTH_TOKEN]){
            this.token = res[environment.AUTH_TOKEN];
            this.userName = res[environment.USER_NAME]
            localStorage.setItem(environment.AUTH_TOKEN, this.token);
            localStorage.setItem(environment.USER_NAME, this.userName);
            this.mainComponent.initNavItems();
            this.router.navigate(['home']);
        }else{
          this.cleanAuthData();
          this.showMessage('Your username and password are incorrect')
        }
      },
      error => {
        this.cleanAuthData();
        this.showMessage('Unable to connect to server');
      }
    );
  }

  isAuthenticated () : boolean{
    var localStorageToken = localStorage.getItem(environment.AUTH_TOKEN);
    if(this.token != null){
      console.log('token exist');
      this.mainComponent.initNavItems();
      return true;  
    }else if(localStorageToken != null){
      console.log('localStorageToken exists', localStorageToken);
      this.token = localStorageToken;
      this.setUserName();
      this.mainComponent.initNavItems();
      console.log('user:', this.userName);
      return true;
    }else{
      console.log('No token exists');
      return false; 
    }
  }

  logout(){
    this.httpClient.post(this.logoutUrl, {}).subscribe(
      res =>{
        console.log(res);
        this.cleanAuthData();
      },
      error =>{
        this.cleanAuthData();
        console.log('Unable to connect to server');
      }
    );
  }

  cleanAuthData(){
    localStorage.removeItem(environment.AUTH_TOKEN);
    localStorage.removeItem(environment.USER_NAME);
    this.router.navigate(['login']);
    this.token = null;
    this.userName = null;
    this.mainComponent.clearNavItems();
  }

  setUserName(){
    if(!this.userName){
      this.userName = localStorage.getItem(environment.USER_NAME);
    }
  }

  showMessage(msg){
    //this.snackBar.open(msg, 'X', { duration: 5000});
  }

}

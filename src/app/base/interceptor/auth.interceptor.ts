import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpHeaders } from "@angular/common/http";
import { LoginService } from '../service/login.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService: LoginService){}

    intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
        if(this.loginService.token){
            const copiedReq = req.clone({headers: new HttpHeaders().set(environment.AUTH_TOKEN, this.loginService.token)});
            return next.handle(copiedReq);
        }
        return next.handle(req);
    }
}
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { environment } from 'src/environments/environment';

export class ApiInterceptor implements HttpInterceptor{

    intercept(req : HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{  
        console.log("intercept: ", req)
        var url = environment.API_PREFIX + req.url;
        const copiedReq = req.clone({url: url});
        return next.handle(copiedReq);
    }
}
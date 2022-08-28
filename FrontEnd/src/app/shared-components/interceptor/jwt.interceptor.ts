import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { GlobalConstant } from '../types/globaltypes';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const user = this.userService.userValue;
    // const isLoggedIn = user && user.token;
    const isLoggedIn = user;
    const isApiUrl = request.url.startsWith(GlobalConstant.apiBaseURL);
    // console.log('intercepted');
  //   request = request.clone({
  //     setHeaders: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin':'*',
  //         // Authorization: `Bearer ${user.token}`
  //     }
  // });
    if (isLoggedIn && isApiUrl) {
        request = request.clone({
            setHeaders: {
              'Content-Type': 'application/json',
              // 'Access-Control-Allow-Origin':'*',
                // Authorization: `Bearer ${user.token}`
            }
        });
    }

    return next.handle(request);
  }
}

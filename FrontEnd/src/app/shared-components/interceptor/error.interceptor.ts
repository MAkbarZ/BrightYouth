import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserService } from '../service/user.service';
import { UserAccountService } from '../service/user-account.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private userAccountService: UserAccountService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if ([401, 403].includes(err.status) && this.userAccountService.userValue) {
          // auto logout if 401 or 403 response returned from api
          this.userAccountService.logout();
        }

        const error = err.error?.message || err.statusText;
        console.error(err);
        // return throwError(error);
        return throwError(() => new Error(error));
      })
    );
  }
}

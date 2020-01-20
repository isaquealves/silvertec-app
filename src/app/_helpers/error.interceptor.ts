import { Observable, throwError } from 'rxjs';
import { AuthenticationService } from '@/_services';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import * as debug from 'debug';

@Injectable()
export class ErrorInterceptorHelper implements HttpInterceptor {
  constructor(
    private authenticationService: AuthenticationService
  ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(
      err => {
        if (err.status === 401) {
          this.authenticationService.logout()
          location.reload();
        }
        const error = err.error.message || err.statusText;
        debug("App");
        return throwError(error);
      }
    ));
  }
}

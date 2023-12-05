import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // como foi gerado
  // ng g interceptor token-interceptor
  // serve para incluir o o token em cara altorizacao

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let accessToken: string = localStorage.getItem("accessToken") || '';
    let tokenType: string = localStorage.getItem("tokenType") || '';

    if (accessToken !== '' && tokenType !== '') {
      request = request.clone({
        setHeaders: {
          Authorization: tokenType + " " + accessToken,
        }
      });
    }
    return next.handle(request);
  }
}

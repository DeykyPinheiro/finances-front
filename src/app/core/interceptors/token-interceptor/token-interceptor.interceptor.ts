import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // como foi gerado
  // ng g interceptor token-interceptor
  // serve para incluir o o token em cara altorizacao

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const tokenAccessToken: string = localStorage.getItem("tokenAccessToken") || '';
    const tokenTokenType: string = localStorage.getItem("tokenTokenType") || '';

    if (tokenAccessToken !== '' && tokenTokenType !== '') {
      request = request.clone({
        setHeaders: {
          Authorization: tokenTokenType + " " + tokenAccessToken,
        }
      });
    }

    return next.handle(request);
  }
}

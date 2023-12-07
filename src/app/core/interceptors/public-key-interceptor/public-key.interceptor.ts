import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';

@Injectable()
export class PublicKeyInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const publicKey: string = sessionStorage.getItem("publicKey") || '';

    if (publicKey == "") {
      this.authService.getRSAPublicKey().subscribe((publicKey: any) => {
        sessionStorage.setItem("publicKey", publicKey.x5c)
      });
    }

    return next.handle(request);
  }
}

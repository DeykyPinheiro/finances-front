import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.dev';

import { TokenDto } from '../models/token-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = 'auth';



  private loggedIn = new BehaviorSubject<boolean>(false)

  isLoggedIn$ = this.loggedIn.asObservable();


  constructor(
    // private router: Router,
    private http: HttpClient
  ) { }


  login(credentials: Credential): Observable<TokenDto> {
    const url = `${environment.baseUrl}/${this.endpoint}/login`
    return this.http.post<TokenDto>(url, credentials);
  }

  getRSAPublicKey(): Observable<any> {
    const url = `${environment.baseUrl}/${this.endpoint}/jwks`;
    return this.http.get<any>(url);
  }

  logout(): void {
    // limpa geral
    localStorage.clear()
    // remove só o item
    // localStorage.removeItem()
  }
}

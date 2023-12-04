import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

import { environment } from 'src/app/environments/environment .dev';
import { TokenDto } from '../models/token-dto';
import { Credential } from '../models/credential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedIn = new BehaviorSubject<boolean>(false)

  isLoggedIn$ = this.loggedIn.asObservable();


  constructor(
    // private router: Router,
    private http: HttpClient
  ) { }


  login(credentials: Credential): Observable<TokenDto> {

    return this.http.post<TokenDto>(environment.baseUrl + "/auth/login", credentials);
    // só estou salvando aqui para mostrar que funciona
    // localStorage.setItem("email", credential.email);
    // localStorage.setItem("senha", credential.password);
    // this.loggedIn.next(true);

    // this.router.navigate(["/"])
    // poderia navegar tbm
    // console.log("estou logado");
  }

  logout(): void {
    // limpa geral
    localStorage.clear()
    // remove só o item
    // localStorage.removeItem()
  }
}

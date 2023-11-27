import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { credential } from '../models/credential';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private loggedIn = new BehaviorSubject<boolean>(false)

  isLoggedIn$ = this.loggedIn.asObservable();


  constructor(private router: Router) { }


  login(credential: credential): void {
    // só estou salvando aqui para mostrar que funciona
    localStorage.setItem("email", credential.email);
    // localStorage.setItem("senha", credential.password);
    this.loggedIn.next(true);

    // poderia navegar tbm
    this.router.navigate(["/"])
  }

  logout(): void {
    // limpa geral
    localStorage.clear()
    // remove só o item
    // localStorage.removeItem()
  }
}

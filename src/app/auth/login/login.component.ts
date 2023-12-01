import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenDto } from '../models/token-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      email: ["", [Validators.required, Validators.minLength(7), Validators.maxLength(120), Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(120)]]
    })
  }


  onSubmit(): void {
    // aqui vai ir a logica
    // console.log("mostrando formlario: " + this.form.value)
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe((token: TokenDto) => {
        // salvar o token
        localStorage.setItem("accessToken", token.accessToken);

        this.router.navigate(["/"])
      })
    }
  }
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // importar pros formularios funcionarem
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AuthRoutingModule } from './auth-routing.module';




@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule
  ]
  // , exports: [
  // LoginComponent,
  // HttpClientModule
  // ]
})
export class AuthModule { }

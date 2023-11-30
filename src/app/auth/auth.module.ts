import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // importar pros formularios funcionarem
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ], exports: [
    LoginComponent,
    HttpClientModule
  ]
})
export class AuthModule { }

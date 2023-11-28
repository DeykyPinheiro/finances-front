import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms'; // importar pros formularios funcionarem



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }

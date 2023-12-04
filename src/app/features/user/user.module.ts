import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // importar pros formularios funcionarem

import { UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserEditComponent,
    UserViewComponent,
    UserDeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports: [
    // UserComponent
  ]
})
export class UserModule { }

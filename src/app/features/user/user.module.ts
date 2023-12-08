import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserEditFormComponent } from './components/user-edit/user-edit-form/user-edit-form.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserCreateComponent,
    UserEditComponent,
    UserViewComponent,
    UserDeleteComponent,
    UserEditFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule
  ],
  exports: []
})
export class UserModule { }

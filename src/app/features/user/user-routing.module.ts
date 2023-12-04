import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserViewComponent } from './components/user-view/user-view.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

const routes = [
  { path: "user-view", component: UserViewComponent },
  { path: "user-create", component: UserCreateComponent },
  { path: "user-edit", component: UserEditComponent },
  { path: "user-delete", component: UserDeleteComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

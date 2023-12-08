import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from 'src/app/core/auth/guards/auth.guard';

import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserViewComponent } from './components/user-view/user-view.component';

const routes = [
  {
    path: "user-view",
    component: UserViewComponent,
    canActivate: [authGuard]
  },
  {
    path: "user-create",
    component: UserCreateComponent
  },
  {
    path: "user-edit/:userId",
    component: UserEditComponent,
    canActivate: [authGuard]
  },
  {
    path: "user-delete/:userId",
    component: UserDeleteComponent,
    canActivate: [authGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './auth/login/login.component';


// usei para registrar as rotas
// --flat é pra criar dentro da /app sem isso ele criaria /app/app
// --module=app -> adicionar dentro do modulo modulo rais (app)
// ng g m app-routing --flat --module=app 


const routes: Routes = [
  { path: "auth", component: LoginComponent },
  { path: "user", component: UserComponent },
  { path: "dashboard", component: DashboardComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // rota padrao 
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

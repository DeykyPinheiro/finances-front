import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    UserModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

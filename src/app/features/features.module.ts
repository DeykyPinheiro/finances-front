import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    UserModule,
    HomeModule
  ]
})
export class FeaturesModule { }

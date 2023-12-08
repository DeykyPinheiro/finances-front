import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';

@NgModule({
  declarations: [
    ResumeDashboardComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

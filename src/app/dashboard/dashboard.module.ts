import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


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

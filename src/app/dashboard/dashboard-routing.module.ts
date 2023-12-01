import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResumeDashboardComponent } from './resume-dashboard/resume-dashboard.component';

const routes: Routes = [
  { path: "resume", component: ResumeDashboardComponent },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

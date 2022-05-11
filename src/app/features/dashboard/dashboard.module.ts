import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from "./dashboard.service";
import { Dashboard } from "./dashboard";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
})
export class DashboardModule { }

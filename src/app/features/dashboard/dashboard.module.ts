import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardService} from "./services/dashboard.service";
import {Dashboard} from "./interfaces/dashboard";
import {MaterialModule} from "../../material/material.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {RouterModule, Routes} from "@angular/router";
import {NgChartsModule} from "ng2-charts";
import {TimeAgoPipe} from "../../shared/pipes/time-ago.pipe";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    NgxMaskModule,
    RouterModule.forChild(routes),
    NgChartsModule,
  ],
  exports: [
    DashboardComponent,
    TimeAgoPipe
  ],
})
export class DashboardModule {
}

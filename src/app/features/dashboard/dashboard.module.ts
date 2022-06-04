import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardService } from "./services/dashboard.service";
import { Dashboard } from "./interfaces/dashboard";
import {MaterialModule} from "../../material/material.module";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    NgxMaskModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    DashboardComponent,
  ]
})
export class DashboardModule { }

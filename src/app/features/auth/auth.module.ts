import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "../dashboard/components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports:[
    LoginComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AuthModule { }

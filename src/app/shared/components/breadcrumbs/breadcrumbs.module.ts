import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import {NgxMaskModule} from "ngx-mask";



@NgModule({
  declarations: [
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BreadcrumbsComponent,
    NgxMaskModule,
  ],
})
export class BreadcrumbsModule { }

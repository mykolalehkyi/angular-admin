import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BreadcrumbsModule} from "./shared/components/breadcrumbs/breadcrumbs.module";
import {CommonModule, DatePipe} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaskModule} from "ngx-mask";
import {NgChartsModule} from 'ng2-charts';
import {AuthModule} from "./features/auth/auth.module";
import { AccordionDirective } from './shared/directives/accordion.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccordionDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BreadcrumbsModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    NgChartsModule,
    AuthModule,
  ],
  providers: [DatePipe],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

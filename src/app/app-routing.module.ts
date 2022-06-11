import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./features/dashboard/components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./features/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    redirectTo: '/error/404'
  }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'top'
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes,routerOptions)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

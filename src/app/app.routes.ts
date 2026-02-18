import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
//  {
//    path: '',
//    component: Layout,
//    children: [
//      {
//        path: 'dashboard',
//        loadChildren: () =>
//          import('./features/dashboard/dashboard-routing-module')
//          .then(m => m.DashboardRoutingModule),
//          canActivate:[authGuard]
//      },
//      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
//    ]
//  }
];

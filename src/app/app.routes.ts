import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
 {
   path: '',
   component: Layout,
   children: [
     {
       path: 'dashboard',
       loadChildren: () =>
         import('./features/dashboard/dashboard-routing-module')
         .then(m => m.DashboardRoutingModule)
     },
     { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
   ]
 }
];

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {EmisionValoresComponent} from './emision-valores/emision-valores.component';
import {DetalleValoresComponent} from './detalle-valores/detalle-valores.component';

const  pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'emision', component: EmisionValoresComponent },
      {path: 'detalle', component: DetalleValoresComponent },
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  }
];

export const PagesRoutes = RouterModule.forChild(pagesRoutes)


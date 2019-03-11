import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesComponent} from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeaderComponent} from '../shared/header/header.component';
import {PagesRoutes} from './pages.route';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { EmisionValoresComponent } from './emision-valores/emision-valores.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DetalleValoresComponent } from './detalle-valores/detalle-valores.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutes,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    HeaderComponent,
    EmisionValoresComponent,
    DetalleValoresComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    HeaderComponent,
    EmisionValoresComponent,
  ]
})
export class PagesModule { }

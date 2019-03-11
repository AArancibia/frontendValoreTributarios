import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {APP_ROUTES} from './app.routes';
import { HeaderComponent } from './shared/header/header.component';
import { es_ES, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import es from '@angular/common/locales/es-PE';
import {registerLocaleData} from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import {PagesModule} from './pages/pages.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
registerLocaleData( es );

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    PagesModule,
    NgZorroAntdModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers   : [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

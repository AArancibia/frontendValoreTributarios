import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }
]

export const APP_ROUTES = RouterModule.forRoot( routes )

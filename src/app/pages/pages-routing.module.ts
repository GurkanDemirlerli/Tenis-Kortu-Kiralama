import { OnayComponent } from './onay/onay.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RandevuComponent } from './randevu/randevu.component';
import { TestComponent } from './test/test.component';
import { IslemBasariliComponent } from './islem-basarili/islem-basarili.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'randevu',
    component: RandevuComponent,
  }, {
    path: 'test',
    component: TestComponent,
  }, {
    path: 'IslemBasarili',
    component: IslemBasariliComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'authentication',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}

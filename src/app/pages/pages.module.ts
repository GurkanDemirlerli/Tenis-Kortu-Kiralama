import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { RandevuModule } from './randevu/randevu.module';
import { TestModule } from './test/test.module';
import { OnayModule } from './onay/onay.module';
import { IslemBasariliModule } from './islem-basarili/islem-basarili.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    HomeModule,
    RandevuModule,
    TestModule,
    OnayModule,
    IslemBasariliModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}

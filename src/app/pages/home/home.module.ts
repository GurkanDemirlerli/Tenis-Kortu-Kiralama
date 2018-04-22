import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';


import { ThemeModule } from '../../@theme/theme.module';

import { HomeComponent } from './home.component';
import { CourtsPreviewComponent } from './courts-preview/courts-preview.component';
import { HavaDurumuComponent } from './hava-durumu/hava-durumu.component';
import { TanitimComponent } from './tanitim/tanitim.component';
import { RandevuCardComponent } from './randevu-card/randevu-card.component';
import { UyeGorusleriComponent } from './uye-gorusleri/uye-gorusleri.component';
import { RouterModule } from '@angular/router';
import { RezervasyonCardComponent } from './rezervasyon-card/rezervasyon-card.component';
import { IslemCardComponent } from './islem-card/islem-card.component';
import { DuyuruComponent } from './duyuru/duyuru.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    CourtsPreviewComponent,
    HavaDurumuComponent,
    TanitimComponent,
    RandevuCardComponent,
    UyeGorusleriComponent,
    RezervasyonCardComponent,
    IslemCardComponent,
    DuyuruComponent
  ],
})
export class HomeModule { }

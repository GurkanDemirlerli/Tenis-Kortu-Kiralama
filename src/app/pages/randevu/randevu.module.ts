import { RezervasyonModalComponent } from './rezervasyon-modal/rezervasyon-modal.component';
import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';


import { ThemeModule } from '../../@theme/theme.module';

import { RandevuComponent } from './randevu.component';
import { RandevuFormComponent } from './randevu-form/randevu-form.component';
import { DayCardComponent } from './day-card/day-card.component';
import { KiralamaModalComponent } from './kiralama-modal/kiralama-modal.component';
import { ToasterModule } from 'angular2-toaster';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    ToasterModule,
  ],
  declarations: [
    RandevuComponent,
    RandevuFormComponent,
    DayCardComponent,
    KiralamaModalComponent,
    RezervasyonModalComponent
  ],
  entryComponents: [
    KiralamaModalComponent,
    RezervasyonModalComponent
  ],
})
export class RandevuModule { }

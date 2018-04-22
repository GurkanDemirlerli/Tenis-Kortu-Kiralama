import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';


import { ThemeModule } from '../../@theme/theme.module';

import { RandevuComponent } from './randevu.component';
import { RandevuFormComponent } from './randevu-form/randevu-form.component';
import { DayCardComponent } from './day-card/day-card.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    RandevuComponent,
    RandevuFormComponent,
    DayCardComponent
  ],
})
export class RandevuModule { }

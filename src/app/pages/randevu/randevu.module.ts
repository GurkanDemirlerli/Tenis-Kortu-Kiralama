import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';


import { ThemeModule } from '../../@theme/theme.module';

import { RandevuComponent } from './randevu.component';
import { RandevuFormComponent } from './randevu-form/randevu-form.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    RandevuComponent,
    RandevuFormComponent
  ],
})
export class RandevuModule { }

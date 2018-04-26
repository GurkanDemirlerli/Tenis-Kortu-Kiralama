import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';


import { ThemeModule } from '../../@theme/theme.module';
import { IslemBasariliComponent } from './islem-basarili.component';




@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    IslemBasariliComponent
  ],
})
export class IslemBasariliModule { }

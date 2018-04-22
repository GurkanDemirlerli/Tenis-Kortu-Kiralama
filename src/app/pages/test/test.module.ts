import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';


import { ThemeModule } from '../../@theme/theme.module';

import { TestComponent } from './test.component';



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    TestComponent
  ],
})
export class TestModule { }

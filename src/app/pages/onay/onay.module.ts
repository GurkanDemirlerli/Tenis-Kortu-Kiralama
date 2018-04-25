import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { OnayRoutingModule, routedComponents } from './onay-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    OnayRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class OnayModule { }

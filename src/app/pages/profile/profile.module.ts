import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ProfileRoutingModule, routedComponents } from './profile-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    ProfileRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ProfileModule { }

import { NgModule } from '@angular/core';

import { TreeModule } from 'ng2-tree';
import { ToasterModule } from 'angular2-toaster';

import { ThemeModule } from '../../@theme/theme.module';
import { AuthenticationRoutingModule, routedComponents } from './authentication-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    AuthenticationRoutingModule,
    TreeModule,
    ToasterModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class AuthenticationModule { }

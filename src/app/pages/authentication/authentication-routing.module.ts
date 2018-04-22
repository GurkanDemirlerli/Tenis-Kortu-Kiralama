import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [{
  path: '',
  component: AuthenticationComponent,
  children: [
    {
      path: 'login',
      component: LoginComponent,
    }, {
      path: 'register',
      component: RegisterComponent,
    }, {
      path: 'logout',
      component: LogoutComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }

export const routedComponents = [
  AuthenticationComponent,
  LoginComponent,
  RegisterComponent,
  LogoutComponent,
];

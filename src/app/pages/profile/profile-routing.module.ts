import { RandevularimComponent } from './randevularim/randevularim.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';



const routes: Routes = [{
  path: '',
  component: ProfileComponent,
  children: [{
    path: 'randevularim',
    component: RandevularimComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }

export const routedComponents = [
  ProfileComponent,
  RandevularimComponent
];

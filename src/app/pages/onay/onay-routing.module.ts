import { KiralamaComponent } from './kiralama/kiralama.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnayComponent } from './onay.component';
import { RezervasyonComponent } from './rezervasyon/rezervasyon.component';



const routes: Routes = [{
  path: '',
  component: OnayComponent,
  children: [{
    path: 'kiralama',
    component: KiralamaComponent,
  }, {
    path: 'rezervasyon',
    component: RezervasyonComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnayRoutingModule { }

export const routedComponents = [
  OnayComponent,
  KiralamaComponent,
  RezervasyonComponent,
];

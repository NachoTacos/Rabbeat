import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmbrosiaPage } from './ambrosia.page';

const routes: Routes = [
  {
    path: '',
    component: AmbrosiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmbrosiaPageRoutingModule {}

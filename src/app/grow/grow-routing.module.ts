import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrowPage } from './grow.page';

const routes: Routes = [
  {
    path: '',
    component: GrowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrowPageRoutingModule {}

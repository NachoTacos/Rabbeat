import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MadrilenoPage } from './madrileno.page';

const routes: Routes = [
  {
    path: '',
    component: MadrilenoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MadrilenoPageRoutingModule {}

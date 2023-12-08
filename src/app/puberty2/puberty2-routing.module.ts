import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Puberty2Page } from './puberty2.page';

const routes: Routes = [
  {
    path: '',
    component: Puberty2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Puberty2PageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VirginiaPage } from './virginia.page';

const routes: Routes = [
  {
    path: '',
    component: VirginiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirginiaPageRoutingModule {}

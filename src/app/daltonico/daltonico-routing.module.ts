import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaltonicoPage } from './daltonico.page';

const routes: Routes = [
  {
    path: '',
    component: DaltonicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaltonicoPageRoutingModule {}

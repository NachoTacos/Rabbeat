import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarartistaPage } from './eliminarartista.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarartistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarartistaPageRoutingModule {}

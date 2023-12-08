import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirartistaPage } from './anadirartista.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirartistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirartistaPageRoutingModule {}

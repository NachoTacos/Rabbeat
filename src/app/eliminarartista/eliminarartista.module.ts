import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarartistaPageRoutingModule } from './eliminarartista-routing.module';

import { EliminarartistaPage } from './eliminarartista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarartistaPageRoutingModule
  ],
  declarations: [EliminarartistaPage]
})
export class EliminarartistaPageModule {}

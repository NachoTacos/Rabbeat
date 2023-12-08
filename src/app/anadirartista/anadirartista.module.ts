import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirartistaPageRoutingModule } from './anadirartista-routing.module';

import { AnadirartistaPage } from './anadirartista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirartistaPageRoutingModule
  ],
  declarations: [AnadirartistaPage]
})
export class AnadirartistaPageModule {}

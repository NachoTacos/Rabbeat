import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrowPageRoutingModule } from './grow-routing.module';

import { GrowPage } from './grow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrowPageRoutingModule
  ],
  declarations: [GrowPage]
})
export class GrowPageModule {}

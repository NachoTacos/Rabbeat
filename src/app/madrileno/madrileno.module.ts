import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MadrilenoPageRoutingModule } from './madrileno-routing.module';

import { MadrilenoPage } from './madrileno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MadrilenoPageRoutingModule
  ],
  declarations: [MadrilenoPage]
})
export class MadrilenoPageModule {}

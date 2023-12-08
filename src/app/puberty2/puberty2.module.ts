import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Puberty2PageRoutingModule } from './puberty2-routing.module';

import { Puberty2Page } from './puberty2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Puberty2PageRoutingModule
  ],
  declarations: [Puberty2Page]
})
export class Puberty2PageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueenPageRoutingModule } from './queen-routing.module';

import { QueenPage } from './queen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueenPageRoutingModule
  ],
  declarations: [QueenPage]
})
export class QueenPageModule {}

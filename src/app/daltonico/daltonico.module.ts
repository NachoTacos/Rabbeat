import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaltonicoPageRoutingModule } from './daltonico-routing.module';

import { DaltonicoPage } from './daltonico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaltonicoPageRoutingModule
  ],
  declarations: [DaltonicoPage]
})
export class DaltonicoPageModule {}

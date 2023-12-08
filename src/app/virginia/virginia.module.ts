import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VirginiaPageRoutingModule } from './virginia-routing.module';

import { VirginiaPage } from './virginia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VirginiaPageRoutingModule
  ],
  declarations: [VirginiaPage]
})
export class VirginiaPageModule {}

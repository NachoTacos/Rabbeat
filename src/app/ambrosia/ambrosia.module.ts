import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmbrosiaPageRoutingModule } from './ambrosia-routing.module';

import { AmbrosiaPage } from './ambrosia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmbrosiaPageRoutingModule
  ],
  declarations: [AmbrosiaPage]
})
export class AmbrosiaPageModule {}

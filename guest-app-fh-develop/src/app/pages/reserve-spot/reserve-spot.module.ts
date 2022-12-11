import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveSpotPageRoutingModule } from './reserve-spot-routing.module';

import { ReserveSpotPage } from './reserve-spot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveSpotPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReserveSpotPage]
})
export class ReserveSpotPageModule {}

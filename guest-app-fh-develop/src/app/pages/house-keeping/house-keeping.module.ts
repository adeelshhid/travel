import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseKeepingPageRoutingModule } from './house-keeping-routing.module';

import { HouseKeepingPage } from './house-keeping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseKeepingPageRoutingModule
  ],
  declarations: [HouseKeepingPage]
})
export class HouseKeepingPageModule {}

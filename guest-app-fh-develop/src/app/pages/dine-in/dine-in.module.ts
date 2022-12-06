import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DineInPageRoutingModule } from './dine-in-routing.module';

import { DineInPage } from './dine-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DineInPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DineInPage]
})
export class DineInPageModule {}

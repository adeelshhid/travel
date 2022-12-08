import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerInfoPageRoutingModule } from './customer-info-routing.module';

import { CustomerInfoPage } from './customer-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CustomerInfoPage]
})
export class CustomerInfoPageModule {}

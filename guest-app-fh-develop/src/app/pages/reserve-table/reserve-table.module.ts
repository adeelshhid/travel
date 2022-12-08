import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReserveTablePageRoutingModule } from './reserve-table-routing.module';

import { ReserveTablePage } from './reserve-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReserveTablePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReserveTablePage]
})
export class ReserveTablePageModule {}

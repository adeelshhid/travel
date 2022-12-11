import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitNowPageRoutingModule } from './submit-now-routing.module';

import { SubmitNowPage } from './submit-now.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitNowPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SubmitNowPage]
})
export class SubmitNowPageModule {}

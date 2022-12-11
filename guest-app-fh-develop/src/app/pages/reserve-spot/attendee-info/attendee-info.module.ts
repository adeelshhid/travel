import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendeeInfoPageRoutingModule } from './attendee-info-routing.module';

import { AttendeeInfoPage } from './attendee-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendeeInfoPageRoutingModule
  ],
  declarations: [AttendeeInfoPage]
})
export class AttendeeInfoPageModule {}

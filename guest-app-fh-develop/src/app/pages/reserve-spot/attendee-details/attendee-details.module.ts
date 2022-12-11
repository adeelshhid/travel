import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendeeDetailsPageRoutingModule } from './attendee-details-routing.module';

import { AttendeeDetailsPage } from './attendee-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendeeDetailsPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [AttendeeDetailsPage]
})
export class AttendeeDetailsPageModule {}

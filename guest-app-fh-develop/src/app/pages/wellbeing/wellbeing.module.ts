import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WellbeingPageRoutingModule } from './wellbeing-routing.module';

import { WellbeingPage } from './wellbeing.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WellbeingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WellbeingPage]
})
export class WellbeingPageModule {}

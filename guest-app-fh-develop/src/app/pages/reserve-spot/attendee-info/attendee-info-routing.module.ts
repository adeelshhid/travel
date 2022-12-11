import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendeeInfoPage } from './attendee-info.page';

const routes: Routes = [
  {
    path: '',
    component: AttendeeInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendeeInfoPageRoutingModule {}

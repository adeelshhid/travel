import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveSpotPage } from './reserve-spot.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveSpotPage
  },
  {
    path: 'attendee-info',
    loadChildren: () => import('./attendee-info/attendee-info.module').then( m => m.AttendeeInfoPageModule)
  },
  {
    path: 'attendee-details',
    loadChildren: () => import('./attendee-details/attendee-details.module').then( m => m.AttendeeDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveSpotPageRoutingModule {}

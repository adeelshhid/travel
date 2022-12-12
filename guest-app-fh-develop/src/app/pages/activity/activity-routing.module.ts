import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityPage } from './activity.page';

const routes: Routes = [
  {
    path: '',
    component: ActivityPage
  },
  {
    path: 'attendee-info',
    loadChildren: () => import('./attendee-info/attendee-info.module').then( m => m.AttendeeInfoPageModule)
  },
  {
    path: 'book-now',
    loadChildren: () => import('./book-now/book-now.module').then( m => m.BookNowPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivityPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseKeepingPage } from './house-keeping.page';

const routes: Routes = [
  {
    path: '',
    component: HouseKeepingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseKeepingPageRoutingModule {}

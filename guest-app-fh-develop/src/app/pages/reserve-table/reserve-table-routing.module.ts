import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveTablePage } from './reserve-table.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveTablePage
  },
  {
    path: 'customer-info',
    loadChildren: () => import('./customer-info/customer-info.module').then( m => m.CustomerInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveTablePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitNowPage } from './submit-now.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitNowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitNowPageRoutingModule {}

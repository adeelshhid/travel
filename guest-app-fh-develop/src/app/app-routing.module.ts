import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ImHereComponent } from './components/imHere/im-here/im-here.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '/house-keeping',
    pathMatch: 'full'
  },
  {
    path: 'imHere',
    component: ImHereComponent,
  },
  {
    path: 'dine-in',
    loadChildren: () => import('./pages/dine-in/dine-in.module').then( m => m.DineInPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./pages/order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'reserve-table',
    loadChildren: () => import('./pages/reserve-table/reserve-table.module').then( m => m.ReserveTablePageModule)
  },
  {
    path: 'wellbeing',
    loadChildren: () => import('./pages/wellbeing/wellbeing.module').then( m => m.WellbeingPageModule)
  },
  {
    path: 'our-services',
    loadChildren: () => import('./pages/our-services/our-services.module').then( m => m.OurServicesPageModule)
  },
  {
    path: 'reserve-spot',
    loadChildren: () => import('./pages/reserve-spot/reserve-spot.module').then( m => m.ReserveSpotPageModule)
  },
  {
    path: 'house-keeping',
    loadChildren: () => import('./pages/house-keeping/house-keeping.module').then( m => m.HouseKeepingPageModule)
  },
  {
    path: 'activity',
    loadChildren: () => import('./pages/activity/activity.module').then( m => m.ActivityPageModule)
  },{
    path: 'submit-now',
    loadChildren: () => import('./pages/submit-now/submit-now.module').then( m => m.SubmitNowPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

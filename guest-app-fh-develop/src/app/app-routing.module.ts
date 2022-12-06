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
    redirectTo: 'dine-in',
    pathMatch: 'full'
  },
  {
    path: 'imHere',
    component: ImHereComponent,
  },
  {
    path: 'dine-in',
    loadChildren: () => import('./pages/dine-in/dine-in.module').then( m => m.DineInPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

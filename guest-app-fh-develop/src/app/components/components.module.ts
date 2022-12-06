import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestaurantsComponent,RestaurantDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[RestaurantsComponent,RestaurantDetailComponent],
})
export class ComponentsModule { }

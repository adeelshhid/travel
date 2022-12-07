import { ItemDetailsComponent } from './item-details/item-details.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestaurantsComponent,RestaurantDetailComponent,MenuItemsComponent,ItemDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports:[RestaurantsComponent,RestaurantDetailComponent,MenuItemsComponent,ItemDetailsComponent],
})
export class ComponentsModule { }
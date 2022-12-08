import { EditComponent } from './edit-reservation/edit-reservation.component';
import { SendingReservartionReqComponent } from './sending-reservartion-req/sending-reservartion-req.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestaurantsComponent, RestaurantDetailComponent,
    MenuItemsComponent,
    ItemDetailsComponent,
    SendingReservartionReqComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [RestaurantsComponent, RestaurantDetailComponent,
    MenuItemsComponent,
    ItemDetailsComponent,
    SendingReservartionReqComponent,
    EditComponent

  ],
})
export class ComponentsModule { }

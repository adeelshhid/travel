import { AccountSettingComponent } from './account-setting/account-setting.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { EditComponent } from './edit-reservation/edit-reservation.component';
import { SendingReservartionReqComponent } from './sending-reservartion-req/sending-reservartion-req.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestaurantsComponent, RestaurantDetailComponent,
    MenuItemsComponent,
    ItemDetailsComponent,
    SendingReservartionReqComponent,
    EditComponent,
    CancelOrderComponent,
    ContactUsComponent,
    AccountSettingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [RestaurantsComponent, RestaurantDetailComponent,
    MenuItemsComponent,
    ItemDetailsComponent,
    SendingReservartionReqComponent,
    EditComponent,
    CancelOrderComponent,
    ContactUsComponent,
    AccountSettingComponent
  ],
})
export class ComponentsModule { }

import { ActivityItemDetailComponent } from './activity-item-detail/activity-item-detail.component';
import { SelectTicketComponent } from './select-ticket/select-ticket.component';
import { SelectDateComponent } from './select-date/select-date.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HItemDetailsComponent } from './h-item-details/h-item-details.component';
import { SendingReservationOutletComponent } from './sending-reservation-outlet/sending-reservation-outlet.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ResortDetailComponent } from './resort-detail/resort-detail.component';
import { ResortsComponent } from './resorts/resorts.component';
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
    AccountSettingComponent,
    ResortsComponent,
    ResortDetailComponent,
    OurServicesComponent,
    ServiceDetailsComponent,
    SendingReservationOutletComponent,
    HItemDetailsComponent,
    ActivitiesComponent,
    ActivityDetailsComponent,
    SelectDateComponent,
    SelectTicketComponent,
    ActivityItemDetailComponent
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
    AccountSettingComponent,
    ResortsComponent,
    ResortDetailComponent,
    OurServicesComponent,
    ServiceDetailsComponent,
    SendingReservationOutletComponent,
    HItemDetailsComponent,
    ActivitiesComponent,
    ActivityDetailsComponent,
    SelectDateComponent,
    SelectTicketComponent,
    ActivityItemDetailComponent
  ],
})
export class ComponentsModule { }

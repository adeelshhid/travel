import { CancelOrderComponent } from './../cancel-order/cancel-order.component';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.scss'],
})
export class EditComponent implements OnInit {
dateChange($event: Event) {
throw new Error('Method not implemented.');
}
onClick() {
throw new Error('Method not implemented.');
}
  data: any
  selectedSeats: number = 1
  selectedLocation: string = 'Royal Island'
  showTime: boolean = false
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
selectTime: any;

  constructor(public global:GlobalService) { }

  ngOnInit() {}

  selectSeats(seats) {
    this.selectedSeats = seats
    console.log(this.accordionGroup.value)
    if (this.accordionGroup.value === 'third') {
      this.accordionGroup.value = undefined;
    } else {
      this.accordionGroup.value = 'third';
    }
  }
  next(){
    this.global.navigate('reserve-table/customer-info')
  }
  cancelOrder(){
    this.global.closeModal()
    this.global.presentModal(CancelOrderComponent,{})
  }
}

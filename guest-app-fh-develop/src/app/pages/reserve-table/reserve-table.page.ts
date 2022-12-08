import { SendingReservartionReqComponent } from './../../components/sending-reservartion-req/sending-reservartion-req.component';
import { GlobalService } from './../../services/global.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Directive, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup, IonItem } from '@ionic/angular';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.page.html',
  styleUrls: ['./reserve-table.page.scss'],
})
export class ReserveTablePage implements OnInit {
  [x: string]: any;
  data: any
  resTable: FormGroup;
  selectedSeats: number = 1
  selectedLocation: string = 'Royal Island'
  showTime: boolean = false
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  constructor(private fb: FormBuilder, private global: GlobalService) {
    this.data = this.global.getNavigationExtras()?.data
    this.resTable = this.fb.group({



    })


  }

  ngOnInit() {

  }



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
  
}



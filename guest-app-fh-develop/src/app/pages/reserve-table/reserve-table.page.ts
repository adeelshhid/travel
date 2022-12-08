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
  resTable:FormGroup;
  selectedSeats: number = 1
  selectedLocation: string = 'Royal Island'
  showTime: boolean = false
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  constructor( private fb:FormBuilder) { 
this.resTable=this.fb.group({


  
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
}



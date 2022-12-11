import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-reserve-spot',
  templateUrl: './reserve-spot.page.html',
  styleUrls: ['./reserve-spot.page.scss'],
})
export class ReserveSpotPage implements OnInit {
  [x: string]: any;
  data: any
  resTable: FormGroup;
  selectedPerson: number = 1
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

  selectPersons(person) {
    this.selectedPerson = person
    console.log(this.accordionGroup.value)
    if (this.accordionGroup.value === 'third') {
      this.accordionGroup.value = undefined;
    } else {
      this.accordionGroup.value = 'third';
    }
  }

  next(){
    this.global.navigate('/reserve-spot/attendee-info')
  }
}

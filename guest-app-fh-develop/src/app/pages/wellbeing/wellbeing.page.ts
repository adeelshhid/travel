import { GlobalService } from './../../services/global.service';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-wellbeing',
  templateUrl: './wellbeing.page.html',
  styleUrls: ['./wellbeing.page.scss'],
})
export class WellbeingPage implements OnInit {
  selectedSeats: number = 1
  selectedLocation:string = 'Royal Island'
  showTime: boolean = false
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
  locations:Array<any> =[
    'Paradise Island',
    'Royal Island',
    'Holiday Island',
    'Fun Island',
    'Sun Island',
  ]
  ngZone: any;
  resorts: Array<any> = [
    {
      name: 'Centara Ras Fushi Resort & Spa',
      img: 'https://ceoworld.biz/wp-content/uploads/2021/05/Soneva-Fushi.jpg',
      distance: '0.2mi',
      types: [
        'Spas','Treatment'
      ],
      isOpened: true,
      time: 'until 10PM',
      location: 'Maafushi',
      desc:'A truly indulgent spa journey that works on all senses to harmonize and rejuvenate…'
    },
    {
      name: 'Nail Salon | Coral Nails Spa ',
      img: 'https://www.sme-news.co.uk/wp-content/uploads/2022/02/Nail-Salon.jpg',
      distance: '0.7mi',
      types: [
        'Nails','Relax'
      ],
      desc:'We offers everything you need to maintain your nails between manicure and pedicure visits.'
    },
    {
      name: 'Spa & Wellness in Maldives',
      img: 'http://travelcentremaldives.com/maldives-blog/wp-content/uploads/2015/01/Huvafen-Fushi-Underwater-Spa-1.jpg',
      distance: '0.7mi',
      types: [
        'Spas','Treatment'
      ],
      desc:`Discover the Maldives's top rated family resort, Centra Grand Island Resort & Spa Maldives, the island where everything is included.`
    },

  ]
  constructor( private global:GlobalService) { }

  date: Date = new Date()

  ngOnInit() {
  }
  filterRes() {
    let extras: NavigationExtras = {
      state: {
        data:this.resorts,
        route:'../../wellbeing'
      }
    }
    this.global.navigateWithExtras('/dine-in/results', extras)
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

  selectLocation(location) {
    this.selectedLocation = location
    console.log(this.accordionGroup.value)
    if (this.accordionGroup.value === 'first') {
      this.accordionGroup.value = undefined;
    } else {
      this.accordionGroup.value = 'first';
    }
  }

  dateChange(evt) {
    console.log(evt)
    evt.preventDefault()
    this.ngZone.run(() => {
      this.date = evt.target.value
    })
  }

  toggleTime() {
    this.showTime = !this.showTime
    // this.date = new Date()
  }

}

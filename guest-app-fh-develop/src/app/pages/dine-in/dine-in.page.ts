import { AccountSettingComponent } from './../../components/account-setting/account-setting.component';
import { NavigationExtras } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-dine-in',
  templateUrl: './dine-in.page.html',
  styleUrls: ['./dine-in.page.scss'],
})
export class DineInPage implements OnInit {
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
  restaurants: Array<any> = [
    {
      name: 'Mandho Restaurant',
      img: 'https://www.biggerbolderbaking.com/wp-content/uploads/2020/01/2-Ingredient-Ice-cream-Thumbnail-scaled.jpg',
      distance: '0.2mi',
      foodTypes: [
        'Cocktails', 'Seafood'
      ],
      isOpened: true,
      time: 'until 10PM',
      location: 'Maafushi'
    },
    {
      name: 'Olive Garden Italian Restaurant',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg',
      distance: '0.2mi',
      foodTypes: [
        'italian', 'Desserts'
      ],
      isOpened: true,
      time: 'until 10PM',
      location: 'Downtown'
    }, {
      name: 'Seagull Cafe House',
      img: 'https://resize.img.allw.mn/thumbs/00/surd8r8ca2rka63zdt9in_1080_1225.jpg?width=1200&height=1200',
      distance: '0.2mi',
      foodTypes: [
        'italian', 'Desserts'
      ],
      isOpened: false,
      time: 'until 10PM',
      location: 'Old street'
    }, {
      name: 'Mai kong Cafe',
      img: 'https://www.pinkvilla.com/files/chinese_noodles.jpg',
      distance: '0.2mi',
      foodTypes: [
        'Chinese', 'Seafood'
      ],
      isOpened: true,
      time: 'until 10PM',
      location: 'Mishigan'
    }, {
      name: 'Biryani Master',
      img: 'https://5.imimg.com/data5/ANDROID/Default/2021/2/XO/NL/AQ/17471808/product-jpeg-500x500.jpg',
      distance: '0.2mi',
      foodTypes: [
        'Pakistani', 'Desi'
      ],
      isOpened: true,
      time: 'until 10PM',
      location: 'Pakistan'
    }
  ]
  
  date: Date = new Date()
  constructor(private global: GlobalService,
    private ngZone: NgZone) { }

  ngOnInit() {
  }
  accountSettings(){
    this.global.presentModal(AccountSettingComponent,{})
  }
  filterRes() {
    let extras: NavigationExtras = {
      state: {
        data: this.restaurants
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

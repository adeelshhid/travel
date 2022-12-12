import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { IonAccordionGroup } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  selectedPeople: any = {
    adult: {
      count: 0
    },
    child: {
      count: 0
    }, 
    infant: {
      count: 0
    }
  }
  selectedLocation: string = 'Royal Island'
  showTime: boolean = false
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;
  locations: Array<any> = [
    'Paradise Island',
    'Royal Island',
    'Holiday Island',
    'Fun Island',
    'Sun Island',
  ]
  ngZone: any;
  acitivies: Array<any> = [
    {
      name: 'Fly Board, Banana Boat And Sailing Activity',
      img: 'https://content.govdelivery.com/attachments/fancy_images/MEDIFW/2020/04/3277158/3027425/shutterstock-1672877824_crop.jpg',
      distance: '0.2mi',
      types: [
        'Speed Boat Rentals'
      ],
      isOpened: true,
      time: 'until 10PM',
      location: 'Maafushi',
      desc: 'Key highlights of this Experience: Day 1: Arrival, speedboat transfer from Male airport to Maafushi island Day '
    },
    {
      name: 'Fishing Trips',
      img: 'https://images.squarespace-cdn.com/content/v1/5b2749c3b27e39015f513c51/1647001647159-3564TS82K7DUJK5LZUE2/Sandy+shores+1.jpg',
      distance: '0.7mi',
      types: [
        'Safety measures', '2+ hours'
      ],
      desc: 'Sports Fishing runs angling trips out of Malé and offers to show you what the local fishery is all about.'
    },
    {
      name: 'Nurse shark & Dolphin snorkeling with Coral garden experience',
      img: 'https://cdn.vallarta-adventures.com/sites/default/files/inline-images/BLOG_dolphin.jpg',
      distance: '0.7mi',
      types: [
        'Shore Excursions', 'Safty Measures'
      ],
      desc: `Snorkeling with Nurse sharks and Giant trevallies
      Snorkeling with Dolphins in the bay`
    },

  ]
  constructor(private global: GlobalService) { }

  date: Date = new Date()

  ngOnInit() {
  }
  filterRes() {
    let extras: NavigationExtras = {
      state: {
        data:this.acitivies,
        route:'../../activity'
      }
    }
    this.global.navigateWithExtras('/dine-in/results', extras)
  }


  selectPeople(people) {
    this.selectedPeople = people
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

  sub(key) {
    if(this.selectedPeople[key].count > 0){
      this.selectedPeople[key].count -= 1
    }
  }
  add(key) {
    this.selectedPeople[key].count += 1
  }
}

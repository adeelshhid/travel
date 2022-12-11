import { SelectDateComponent } from './../select-date/select-date.component';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss'],
})
export class ActivityDetailsComponent implements OnInit {

  @Input() data?: any
  items: Array<any> = [
    {
      name: 'Sailing the Maldives ',
      img: 'https://media.gadventures.com/media-server/cache/a9/f8/a9f87567587408521acff6e7177b3841.jpg',
      text: 'Activity',
      distance:'1.5mi'
    },
    {
      name: 'Nurse shark & Dolphin snorkeling with Coral garden experience',
      img: 'https://cdn.getyourguide.com/img/tour/95fa5b6c461bcf39.jpeg/146.jpg',
      text: 'Activity',
      distance:'1.5mi'
    },
    {
      name: 'Sailing the Maldives',
      img: 'https://media.gadventures.com/media-server/cache/a9/f8/a9f87567587408521acff6e7177b3841.jpg',
      text: 'Activity',
      distance:'1.5mi'
    },
  ]
  times: Array<any> = [
    'Oct 30',
    'Oct 31',
    'Nov 01',
    'Nov 02',
    'Nov 03',
    'Nov 04',
    'Nov 05',
  ]
  menuItems: boolean = false
item: any;
  constructor(public global: GlobalService) { }

  ngOnInit() {}

  ionViewWillEnter() {
    console.log(this.data)
  }

  closeMenuItems(event) {
    this.menuItems = event
    console.log(event)
  }
   dateSel(){
    this.global.presentModal(SelectDateComponent,{})
  }

}

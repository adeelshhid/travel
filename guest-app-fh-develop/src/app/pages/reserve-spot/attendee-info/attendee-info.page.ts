import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendee-info',
  templateUrl: './attendee-info.page.html',
  styleUrls: ['./attendee-info.page.scss'],
})
export class AttendeeInfoPage implements OnInit {

  constructor(public global:GlobalService) { }

  ngOnInit() {
  }
  next(){
   this.global.navigate('reserve-spot/attendee-details')
  }

}

import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { ContactUsComponent } from './../../components/contact-us/contact-us.component';
import { EditComponent } from '../../components/edit-reservation/edit-reservation.component';
import { Router } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  public progress = 0;
  isConfirmed: boolean = false
  isCompleted:boolean = false
  constructor(private global: GlobalService, private ss:SocialSharing) {

    const interval = setInterval(() => {
      this.progress += 0.0002;
      if (this.progress >= 0.5) {
        this.isConfirmed = true
        // console.log(this.progress)
      }
      if (this.progress >= 1) {
        this.isConfirmed = false
        this.isCompleted = true
        clearInterval(interval)
      }
    })

  }

  ngOnInit() {

  }
  progessChange(evt) {
    console.log(evt)
    if (this.progress == 0.50) {
      this.isConfirmed = true
    }
  }

  editRes(){
    this.global.presentModal(EditComponent,{})
  }

  contactUs(){
    this.global.presentModal(ContactUsComponent,{})
  }

  share(){
    this.ss.share('Travel App','Test')
    }
}

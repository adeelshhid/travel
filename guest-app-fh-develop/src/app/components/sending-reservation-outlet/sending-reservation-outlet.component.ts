import { NavigationExtras } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sending-reservation-outlet',
  templateUrl: './sending-reservation-outlet.component.html',
  styleUrls: ['./sending-reservation-outlet.component.scss'],
})
export class SendingReservationOutletComponent implements OnInit {
  isSent:boolean = false
  @Input() data :any
  constructor(private global:GlobalService) { }

  ngOnInit() {}
  ngAfterViewInit(){
    setTimeout(() => {
      this.isSent = true
    }, 1500)
  }
  gotIt(){
    this.global.closeModal()
    this.global.navigate('wellbeing')
  }
  
  viewOrder(){
    this.global.closeModal()
    if (this.data.route ==='wellbeing' ) {
      let extras:NavigationExtras = {
        state:{
          data:this.data
        }
      }
    this.global.navigateWithExtras('order-details',extras)
    }else{
    this.global.navigate('outlet-details')

    }

  }


}

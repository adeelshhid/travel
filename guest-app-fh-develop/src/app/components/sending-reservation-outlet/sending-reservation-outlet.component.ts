import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-sending-reservation-outlet',
  templateUrl: './sending-reservation-outlet.component.html',
  styleUrls: ['./sending-reservation-outlet.component.scss'],
})
export class SendingReservationOutletComponent implements OnInit {
  isSent:boolean = false
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
    this.global.navigate('outlet-details')
  }


}

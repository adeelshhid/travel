import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sending-reservartion-req',
  templateUrl: './sending-reservartion-req.component.html',
  styleUrls: ['./sending-reservartion-req.component.scss'],
})
export class SendingReservartionReqComponent implements OnInit {
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
    this.global.navigate('dine-in')
  }
  
  viewOrder(){
    this.global.closeModal()
    this.global.navigate('order-details')
  }

}

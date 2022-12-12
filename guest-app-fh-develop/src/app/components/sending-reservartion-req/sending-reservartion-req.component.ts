import { NavigationExtras } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';
import { TicketInfoComponent } from '../ticket-info/ticket-info.component';

@Component({
  selector: 'app-sending-reservartion-req',
  templateUrl: './sending-reservartion-req.component.html',
  styleUrls: ['./sending-reservartion-req.component.scss'],
})
export class SendingReservartionReqComponent implements OnInit {
  isSent: boolean = false
  @Input() data: any
  constructor(private global: GlobalService) { }

  ngOnInit() { }
  ngAfterViewInit() {
    setTimeout(() => {
      this.isSent = true
    }, 1500)
  }
  gotIt() {
    this.global.closeModal()
    this.global.navigate(this.data?.route)
  }

  viewOrder() {
    this.global.closeModal()
    let extras: NavigationExtras = {
      state: {
        data: this.data
      }
    }
    this.global.navigateWithExtras('order-details', extras)

  }

}

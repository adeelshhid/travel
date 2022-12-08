import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sending-reservartion-req',
  templateUrl: './sending-reservartion-req.component.html',
  styleUrls: ['./sending-reservartion-req.component.scss'],
})
export class SendingReservartionReqComponent implements OnInit {
  isSent:boolean = false
  constructor() { }

  ngOnInit() {}
  ngAfterViewInit(){
    setTimeout(() => {
      this.isSent = true
    }, 1500)
  }

}

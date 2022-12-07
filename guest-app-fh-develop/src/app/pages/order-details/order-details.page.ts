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
  isConfirmed:boolean = false
  constructor(private global: GlobalService, private route: Router) {


   const interval =  setInterval(() => {
      this.progress += 0.001;
      if (this.progress >=0.5) {
        this.progress = 0
        console.log(this.progress)
      }
    })
    

  }

  ngOnInit() {

  }
  progessChange(evt) {
    console.log(evt)
    if (this.progress == 0.50) {
      alert('asdas')
    }
  }

}

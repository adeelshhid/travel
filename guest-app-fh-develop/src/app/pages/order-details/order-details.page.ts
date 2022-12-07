import { Router } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  public progress=0;
  constructor(private global:GlobalService, private route:Router) { 


setInterval(() =>{
  this.progress += 0.001;

  if(this.progress == 0.30){
this.route.navigate(['/order-details'])
  }
})

  }

  ngOnInit() {
    
  }

}

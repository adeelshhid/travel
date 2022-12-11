import { HItemDetailsComponent } from './../../components/h-item-details/h-item-details.component';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-house-keeping',
  templateUrl: './house-keeping.page.html',
  styleUrls: ['./house-keeping.page.scss'],
})
export class HouseKeepingPage implements OnInit {
item: any;


  constructor(public global:GlobalService) { }

  ngOnInit() {
  }
open(item){
this.global.presentModal(HItemDetailsComponent,item)
}

}

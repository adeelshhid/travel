import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-activity-item-detail',
  templateUrl: './activity-item-detail.component.html',
  styleUrls: ['./activity-item-detail.component.scss'],
})
export class ActivityItemDetailComponent implements OnInit {
  selectItem:any
  selectedItems: any = {
    item: {
      count: 0
    },
  }
  @Input() data:any
  constructor(public global :GlobalService) {
   }

  ngOnInit() {}


  sub(key) {
    if(this.selectedItems[key].count >= 1){
      this.selectItem=true
      this.selectedItems[key].count -= 1
    }
    if (this.selectedItems[key].count == 0) {
      this.selectItem=false
      
    }
  }
  add(key) {
    this.selectedItems[key].count += 1
    this.selectItem=true
  }

}

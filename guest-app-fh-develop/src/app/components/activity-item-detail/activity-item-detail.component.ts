import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-activity-item-detail',
  templateUrl: './activity-item-detail.component.html',
  styleUrls: ['./activity-item-detail.component.scss'],
})
export class ActivityItemDetailComponent implements OnInit {
  viewOrderBtn: any

  selectedPeople: any = {
    adult: {
      count: 0,
      price: 0
    },
    child: {
      count: 0,
      price: 0
    }
  }
  @Input() data: any
  constructor(public global: GlobalService) {
  }

  ngOnInit() { }


  sub(key) {
    if (this.selectedPeople[key].count >= 1) {
      this.viewOrderBtn = true
      this.selectedPeople[key].count -= 1
      this.selectedPeople[key].price -= key === 'child' ? 200 : 300
    }
    if (this.selectedPeople['adult'].count == 0 && this.selectedPeople['child'].count == 0) {
      this.viewOrderBtn = false

    }
  }
  add(key) {
    this.selectedPeople[key].count += 1
    this.selectedPeople[key].price += key === 'child' ? 200 : 300
    this.viewOrderBtn = true
  }

}

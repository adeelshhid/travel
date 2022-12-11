import { NavigationExtras } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-item-details',
  templateUrl: './h-item-details.component.html',
  styleUrls: ['./h-item-details.component.scss'],
})
export class HItemDetailsComponent implements OnInit {

  selectedDrinks: any = {
    wine: {
      count: 0
    },
    whisky: {
      count: 0
    }, 
    chips: {
      count: 0
    },
    nuts: {
      count: 0
    },

  }

  @Input() data: any;
  constructor(public global: GlobalService) { }

  ngOnInit() { }

  submit(){
    this.global.closeModal()
    let extras:NavigationExtras = {
      state:{
        data:this.data
      }
    }
    this.global.navigateWithExtras('/submit-now',extras)
  }


  sub(key) {
    if(this.selectedDrinks[key].count > 0){
      this.selectedDrinks[key].count -= 1
    }
  }
  add(key) {
    this.selectedDrinks[key].count += 1
  }
}

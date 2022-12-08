import { NavigationExtras } from '@angular/router';
import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {

  @Input() data?: any
  foodItems: Array<any> = [
    {
      name: '1/2 Dozen Raw Oyster',
      img: 'https://www.allrecipes.com/thmb/GLQSB4UBMHpxhApsPVnIq75SRXM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/12801-rockin-oysters-rockefeller-ddmfs-1x2-1-df74f88c0c534155bfed27d24eaf8eda.jpg',
      price: '$18.95',
    },
    {
      name: 'Special Lemon Chicken',
      img: 'https://www.modernhoney.com/wp-content/uploads/2019/04/Chinese-Lemon-Chicken-7-500x500.jpg',
      price: '$20.50',
    },
    {
      name: 'Mussels 1 LB',
      img: 'https://i.guim.co.uk/img/media/51e14d77559a00df56657cfe7e5ed31218114e9a/483_0_5877_3527/master/5877.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=8aca3199674a45609e25695a89fe80dd',
      price: '$23.88',
    },
    {
      name: 'Chicken Biryani',
      img: 'https://foodbrigade.com.pk/wp-content/uploads/2022/08/food-brigade-chicken-biryani2.webp',
      price: '$12.50',
    }
  ]
  times: Array<any> = [
    '6:00AM',
    '6:15AM',
    '6:30AM',
    '6:45AM',
    '7:00AM',
    '7:15AM',
    '7:30AM',
  ]
  menuItems: boolean = false
  constructor(public global: GlobalService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    console.log(this.data)
  }

  closeMenuItems(event) {
    this.menuItems = event
    console.log(event)
  }
  async reserveTable(){
    let extras:NavigationExtras = {
      state:{
        data: this.data
      }
    }
    await this.global.closeModal()
    this.global.navigateWithExtras('reserve-table',extras)
  }
}

import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-resort-detail',
  templateUrl: './resort-detail.component.html',
  styleUrls: ['./resort-detail.component.scss'],
})
export class ResortDetailComponent implements OnInit {
  @Input() data?: any
  times: Array<any> = [
    '6:00AM',
    '6:15AM',
    '6:30AM',
    '6:45AM',
    '7:00AM',
    '7:15AM',
    '7:30AM',
  ]

  resorts: Array<any> = [
    { img: 'https://img.grouponcdn.com/iam/22xL6widWPr2knAmwRYHznoFM5xS/22-2048x1229/v1/c870x524.jpg',label:'$130' },
    { img: 'https://media.istockphoto.com/id/501398614/photo/face-skin-care-facial-hydro-microdermabrasion-peeling-treatment.jpg?s=612x612&w=0&k=20&c=8sB-63Okl1ZlF1aHNRtJb7aVzf3qCezOnphkgnW_shY=',label:'$130'  },
    { img: 'https://lahoremassage.net/wp-content/uploads/2021/12/woman-getting-healing-body-massage-session-at-newest-spa.jpg',label:'$130' },
  ]
  


  constructor(public global: GlobalService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    console.log(this.data)
  }
  async reserveSpot() {
    let extras: NavigationExtras = {
      state: {
        data: this.data
      }
    }
    await this.global.closeModal()
    this.global.navigateWithExtras('/reserve-spot', extras)
  }


  ourServices(){
    this.global.closeModal()
this.global.navigate('/our-services')

  }
}

import { RestaurantDetailComponent } from './../restaurant-detail/restaurant-detail.component';
import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  @Input() restaurants:Array<any> = []
  @Input() sortFilters:boolean = true
  constructor(private global:GlobalService) { }

  ngOnInit() {}

  resDetails(data){
    this.global.presentModal(RestaurantDetailComponent,data)
  }

}

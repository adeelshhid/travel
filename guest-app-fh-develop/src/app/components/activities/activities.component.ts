import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { ResortDetailComponent } from '../resort-detail/resort-detail.component';

@Component({
  selector: 'activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  @Input() activities:Array<any> = []
  @Input() sortFilters:boolean = true

  constructor( private global:GlobalService) { }

  ngOnInit() {}
  resDetails(data){

this.global.presentModal(ResortDetailComponent,data)
  }
}
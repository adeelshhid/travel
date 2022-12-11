import { ResortDetailComponent } from './../resort-detail/resort-detail.component';
import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.scss'],
})
export class ResortsComponent implements OnInit {
  @Input() resorts:Array<any> = []
  @Input() sortFilters:boolean = true

  constructor( private global:GlobalService) { }

  ngOnInit() {}
  resDetails(data){

this.global.presentModal(ResortDetailComponent,data)

  }

}

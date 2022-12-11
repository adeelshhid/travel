import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent implements OnInit {
  @Input() data:any
  constructor(public global:GlobalService) { }

  ngOnInit() {}
  ngAfterViewInit(){
    console.log(this.data)

  }
}

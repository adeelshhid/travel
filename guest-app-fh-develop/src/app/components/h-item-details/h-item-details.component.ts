import { GlobalService } from './../../services/global.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-item-details',
  templateUrl: './h-item-details.component.html',
  styleUrls: ['./h-item-details.component.scss'],
})
export class HItemDetailsComponent implements OnInit {
@Input() data:any;

  constructor(public global:GlobalService) { }

  ngOnInit() {}

}

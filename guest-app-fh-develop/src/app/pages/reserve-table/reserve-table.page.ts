import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.page.html',
  styleUrls: ['./reserve-table.page.scss'],
})
export class ReserveTablePage implements OnInit {

  selectTime:boolean=false
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.selectTime=true 
  }

}

import { GlobalService } from './../../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  filteredRes: Array<any> = []
  route:string
  constructor(private global: GlobalService) {
    this.filteredRes = this.global.getNavigationExtras()?.data
    this.route = this.global.getNavigationExtras()?.route
    console.log(this.route)
  }

  ngOnInit() {
  }

}

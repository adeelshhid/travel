import { SelectTicketComponent } from './../select-ticket/select-ticket.component';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.scss'],
})
export class SelectDateComponent implements OnInit {
  [x: string]: any;
  constructor(public global: GlobalService) { }

  ngOnInit() { }
  next() {
this.global.closeModal()
    this.global.presentModal(SelectTicketComponent, {})
  }
}

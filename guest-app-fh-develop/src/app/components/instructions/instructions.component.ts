import { GlobalService } from 'src/app/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss'],
})
export class InstructionsComponent implements OnInit {

  constructor(public global:GlobalService) { }

  ngOnInit() {}
  next(){
    this.global.closeModal()
this.global.navigate('activity/attendee-info')
  }

}

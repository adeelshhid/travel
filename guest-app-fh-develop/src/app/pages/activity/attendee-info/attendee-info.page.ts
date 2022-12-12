import { GlobalService } from 'src/app/services/global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendee-info',
  templateUrl: './attendee-info.page.html',
  styleUrls: ['./attendee-info.page.scss'],
})
export class AttendeeInfoPage implements OnInit {
  firstName:string='';
  lastName:string='';
[x: string]: any;
  attendeeInfo:FormGroup
  constructor(private fb:FormBuilder,public global:GlobalService) { 
 this.attendeeInfo= this.fb.group({

fName:['',[Validators.required]],
lName:['',[Validators.required]],
age:[,Validators.required]

 })



  }

  ngOnInit() {
  }
  next(items){
this.global.navigate('activity/book-now')
  }

}

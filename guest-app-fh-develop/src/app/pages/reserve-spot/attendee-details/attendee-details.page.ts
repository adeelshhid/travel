import { SendingReservationOutletComponent } from './../../../components/sending-reservation-outlet/sending-reservation-outlet.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-attendee-details',
  templateUrl: './attendee-details.page.html',
  styleUrls: ['./attendee-details.page.scss'],
})
export class AttendeeDetailsPage implements OnInit {
  customerForm: FormGroup;


  constructor(private fb: FormBuilder,
    public global:GlobalService) {
this.customerForm = this.fb.group({
fName: ['', [Validators.required]],
lName: ['', [Validators.required]],
email: ['', [Validators.required]],
phone: ['', [Validators.required]],
})

}

  ngOnInit() {
  }
  sendingReq(){
    this.global.presentModal(SendingReservationOutletComponent,{})
  }

}

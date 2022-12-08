import { GlobalService } from './../../../services/global.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SendingReservartionReqComponent } from 'src/app/components/sending-reservartion-req/sending-reservartion-req.component';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.page.html',
  styleUrls: ['./customer-info.page.scss'],
})
export class CustomerInfoPage implements OnInit {
  customerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private global:GlobalService) {
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
    this.global.presentModal(SendingReservartionReqComponent,{})
  }
}

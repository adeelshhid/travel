import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingReservartionReqComponent } from 'src/app/components/sending-reservartion-req/sending-reservartion-req.component';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNowPage implements OnInit {
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

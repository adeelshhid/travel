import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendingReservartionReqComponent } from 'src/app/components/sending-reservartion-req/sending-reservartion-req.component';

@Component({
  selector: 'app-submit-now',
  templateUrl: './submit-now.page.html',
  styleUrls: ['./submit-now.page.scss'],
})
export class SubmitNowPage implements OnInit {
  customerForm: FormGroup;
  data:any = {}
  constructor(private fb: FormBuilder,
    private global:GlobalService) {
      this.data = this.global.getNavigationExtras()?.data
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
    this.global.presentModal(SendingReservartionReqComponent,{route:'wellbeing'})
  }
}

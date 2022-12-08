import { FormGroup, FormBuilder } from '@angular/forms';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {

  customerForm: FormGroup
  constructor(public global: GlobalService) {



  }

  ngOnInit() { }

}

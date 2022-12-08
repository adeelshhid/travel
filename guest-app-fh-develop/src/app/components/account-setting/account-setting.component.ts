import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.scss'],
})
export class AccountSettingComponent implements OnInit {

  constructor(public global : GlobalService) { }

  ngOnInit() {}

}

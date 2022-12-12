import { TicketInfoComponent } from './../../components/ticket-info/ticket-info.component';
import { InstructionsComponent } from './../../components/instructions/instructions.component';
import { HItemDetailsComponent } from './../../components/h-item-details/h-item-details.component';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-house-keeping',
  templateUrl: './house-keeping.page.html',
  styleUrls: ['./house-keeping.page.scss'],
})
export class HouseKeepingPage implements OnInit {
item: any;
arr:Array<any>=[
{icon:'plug-adopter',name:'Plug adaptor',desc:'Full line of universal travel adapters and iPhone chargers'},
{icon:'towel',name:'Fresh towel set',desc:'Bath sheets, bath towels, hand towels and washcloths'},
{icon:'minibar',name:'Mini bar refill ',desc:'Wine, whiskey, chips, nuts'},
{icon:'bed-white-outline',name:'Room issue',desc:'Please write down your room issue before submit'}

]

  constructor(public global:GlobalService) { 
    this.global.presentModal(TicketInfoComponent,{})
  }

  ngOnInit() {
  }
open(item,idx){
  if (idx === 2) {
    item.isFoodSelection = true
  }else{
    item.isFoodSelection = false

  }
this.global.presentModal(HItemDetailsComponent,item)
}

}

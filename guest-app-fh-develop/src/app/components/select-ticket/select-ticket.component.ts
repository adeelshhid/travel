import { ActivityItemDetailComponent } from './../activity-item-detail/activity-item-detail.component';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-ticket',
  templateUrl: './select-ticket.component.html',
  styleUrls: ['./select-ticket.component.scss'],
})
export class SelectTicketComponent implements OnInit {

arr:Array<any>=[
{
  title:'Sunrise Fishing - (Handline trolling)',status:'Ticket not available for Oct 30',time:'Time: 05:30 - 8:30 Min-Max: 4-8 people',price:'$128',img:'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
},
{
  title:'Sunset Fishing - (Handline bottom fishing)',time:'Time: 17:15 - 20:00 Min: 8 people',price:'$128',img:'https://images.pexels.com/photos/33834/landscape-shore-sunset-clouds.jpg?cs=srgb&dl=pexels-pixabay-33834.jpg&fm=jpg'
},
{
  title:'Big game Fishing Lite (Deep Sea Trolling)',time:'Time: 05:30 - 8:30 Min-Max: 4-8 people',price:'$128',img:'https://www.nps.gov/subjects/fishing/images/Mississippi-recreational-area-fishing-canoe-NPS.jpg?maxwidth=650&autorotate=false'
},
{
  title:'Morning - Deep Sea Trolling, Popping, Jigging',time:'Time: 05:30 - 8:30 Min-Max: 4-8 people',price:'$128',img:'https://yfspecialist.com/img/blog/seychelles/jigging-article/jigging-action-seychelles.jpg'
},
{
  title:'Afternoon - Deep Sea Trolling, Popping, Jigging',time:'Time: 05:30 - 8:30 Min-Max: 4-8 people',price:'$128',img:'https://yfspecialist.com/img/blog/seychelles/jigging-article/jigging-action-seychelles.jpg'
},
{
  title:'Full day- Deep Sea Trolling, Popping, Jigging',time:'Time: 05:30 - 8:30 Min-Max: 4-8 people',price:'$128',img:'https://yfspecialist.com/img/blog/seychelles/jigging-article/jigging-action-seychelles.jpg'
},



]

  constructor(public global:GlobalService) { }

  ngOnInit() {}
  itemDet(item){
this.global.presentModal(ActivityItemDetailComponent,item)
  }

}

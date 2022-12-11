import { ServiceDetailsComponent } from './../service-details/service-details.component';
import { GlobalService } from './../../services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  arr: Array<any> = [
    {
      name: 'Signature Experiences', desc: 'The ultimate in body and mind purification, this specialized detoxifying treatment facilitates the removal of toxins from your body. ', price: '$18.95', img: 'https://www.saint-james-paris.com/_novaimg/4722455-1474608_484_0_4003_3002_1200_900.jpg'
    },
    {
      name: 'Spa Couples Suite', desc: 'A journey for two enveloping all your senses, experience a deep sense of relaxation and tranquility', price: '$18.95', img: 'https://i.pinimg.com/originals/4c/b8/1d/4cb81d3d2caeadb35f6d33c7d6c3d489.jpg'
    },
    {
      name: 'Massages', desc: 'The massage uses firm, deliberate strokes, and compressions for those who seek deeper pressure with profound and lasting effects.', price: '$90.95', img: 'https://pereaclinic.com/wp-content/uploads/2021/04/headache-scaled.jpg'
    },
    {
      name: 'Body Scrubs', desc: 'Restore your skin to a healthy glow with this unique exfoliating and hydrating treatment', price: '$90.95', img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/18/32/e3/full-body-massage.jpg'
    },
  ];
  arr2: Array<any> = [
    {
      name: 'Hair Care', desc: 'Cut | Styling |Treatment |Color', price: '$18.95', img: 'https://www.byrdie.com/thmb/bq7WcV3iOqmPp0okYyb-VpagB-4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-92348095-1d41442eb93e4382abdb5e47a2d38a0a.jpg'
    },
    {
      name: 'Nail Care', desc: ' Classic manicure | Spa manicure| Deluxe manicure ', price: '$18.95', img: 'https://images.herzindagi.info/image/2022/Jul/nail-care-products-from-amazon_g.jpg'
    },

  ];
  arr3: Array<any> = [
    {
      name: 'Skincare', desc: 'Experience a perfect balance between total relaxation and cosmeceutical effectiveness', price: '$18.95', img: 'https://static-bebeautiful-in.unileverservices.com/1200/900/how-to-build-a-natural-skincare-routine_mobhome.jpg'
    },
 
  ]

  constructor( public global:GlobalService) { }

  ngOnInit() {}
  itemDetails(item){
    this.global.presentModal(ServiceDetailsComponent,item)
  }
}

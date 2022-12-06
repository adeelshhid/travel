import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss'],
})
export class MenuItemsComponent implements OnInit {

  @Output() closeMenu: EventEmitter<any> = new EventEmitter();

  arr: Array<any> = [
    {
      label: '1/2 Dozen Raw Oyster', description: 'Blue Points Oyster', price: '$18.95', img: 'https://cdn.vox-cdn.com/thumbor/9gycKvS94STsR8dvYkScFwKIEck=/0x0:2048x1360/1200x900/filters:focal(861x517:1187x843)/cdn.vox-cdn.com/uploads/chorus_image/image/65886192/FattoBolognese.22.jpeg'
    },
    {
      label: 'Mussels 1 LB', description: 'Comes with corn and potatoes', price: '$18.95', img: 'https://assets.bonappetit.com/photos/57acc32353e63daf11a4d9c5/1:1/w_2560%2Cc_limit/steamed-mussels-with-fennel-and-tarragon.jpg'
    },
    {
      label: 'Vodka Martini', description: 'Vodka and dry vermouth with green olives or a lemon twist', price: '$7.95', img: 'https://i.pinimg.com/736x/69/54/73/6954732ac331885267902ba57548e7f4.jpg'
    },
  ];
  arr2: Array<any> = [
    {
      label: 'Naruto', description: 'Salmon, crab meat, tobiko, avocado and spicy mayo rolled in thin sliced cucumber.', price: '$18.95', img: 'https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg'
    },
    {
      label: 'Spicy Tuna Sashimi Appetizer', description: 'Tuna with spicy mayo, tempura crumbs, avocado and topped with tobiko', price: '$18.95', img: 'https://www.thespruceeats.com/thmb/7yMQzK9G7ogWdf4D0iAiukS52Vo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-tuna-roll-2031509-hero-02-4c1809d4a2f74ea49013ee081a79543b.jpg'
    },

  ];
  arr3: Array<any> = [
    {
      label: 'Iskender Kebab', description: 'Vermont Lamb, Turkish Bread, Tomato Brown Butter, Yogurt Sauce', price: '$18.95', img: 'https://www.pressurecookrecipes.com/wp-content/uploads/2021/02/california-roll.jpg'
    },
    {
      label: 'Special Lemon Chicken', description: `Za'atar, Turkish Cheese Pancake`, price: '$18.95', img: 'https://natashaskitchen.com/wp-content/uploads/2020/02/Lemon-Chicken-3-728x1092.jpg'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.closeMenu.emit(false)
  }

}
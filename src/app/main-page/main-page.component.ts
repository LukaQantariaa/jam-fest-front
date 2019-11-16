import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  favoriteItemList = [ 
    '../../assets/pictures/most-popular/item0.jpg',
    '../../assets/pictures/most-popular/item1.jpg',
    '../../assets/pictures/most-popular/item2.jpg',
    '../../assets/pictures/most-popular/item3.jpg',
    '../../assets/pictures/most-popular/item4.jpg',
    '../../assets/pictures/most-popular/item5.jpg',
    '../../assets/pictures/most-popular/item6.jpg',
    '../../assets/pictures/most-popular/item7.jpg',
    '../../assets/pictures/most-popular/item8.jpg',
    '../../assets/pictures/most-popular/item9.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}

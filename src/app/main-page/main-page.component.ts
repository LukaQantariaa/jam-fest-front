import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  favoriteItemList = [ 
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    },
    {
      img: '../../assets/pictures/most-popular/item1.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

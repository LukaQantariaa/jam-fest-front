import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  logoUrl: string = '../../assets/pictures/images/11-01.jpg';
  logoUrl1:string = '../../assets/pictures/images/222-01.jpg';
  logoUrl2:string = '../../assets/pictures/images/333-01.jpg';
  logoUrl3:string = '../../assets/pictures/images/velo.jpg';
  favoriteItemList = [ 
    {
      imgSrc: '../../assets/pictures/most-popular/item0.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item1.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item2.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item3.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item4.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item5.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item6.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item7.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item8.jpg',
    },
    {
      imgSrc: '../../assets/pictures/most-popular/item9.jpg',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  itemsArr = [];


  constructor(
    private items: ItemsService
  ) { }

  ngOnInit() {
    let res = window.location.href.split("/");
    let id = res[res.length-1];
    this.items.itemsPost(id).subscribe( (p: []) => {
      this.itemsArr = [...p];
      console.log(this.itemsArr);
    }, (error) => {
      console.log(error);
    })
  }

}

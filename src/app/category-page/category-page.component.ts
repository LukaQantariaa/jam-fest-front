import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { OfferDialogComponent } from './offer-dialog/offer-dialog.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  itemsArr = [];


  constructor(
    private items: ItemsService,
    private offerDialog: MatDialog
  ) { }

  ngOnInit() {
    let res = window.location.href.split("/");
    let id = res[res.length-1];
    this.items.itemsPost({category: id.toString()}).subscribe( (p: []) => {
      this.itemsArr = [...p];
      console.log(this.itemsArr);
    }, (error) => {
      console.log(error);
    })
  }
  
  onOfferClick(index: number){
    console.log(index)
    const offerDialogRef = this.offerDialog.open(OfferDialogComponent, {
      width: '400px',
      height: '',
      data: {id: index}
    });

    offerDialogRef.afterClosed().subscribe(result => {

      console.log(result);
      
    })
  }

}

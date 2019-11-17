import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ItemsService } from 'src/app/services/items.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-offer-dialog',
  templateUrl: './offer-dialog.component.html',
  styleUrls: ['./offer-dialog.component.scss']
})
export class OfferDialogComponent implements OnInit {

  myItemsArr = [];
  checkboxValues: boolean[] = [];

  constructor(
    public offerDialogRef: MatDialogRef<OfferDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
      private itemsService: ItemsService,
      private userProfileService: UserProfileService
    ) {}

  ngOnInit() {
    this.itemsService.itemsPost({}).subscribe( (p: any[]) => {
      this.myItemsArr = p.filter(p => {
        return p.user_id == this.userProfileService.userId;
      })
      console.log(this.userProfileService.userId)
      console.log(this.myItemsArr);
      for(let i=0; i<this.myItemsArr.length; i++){
        this.checkboxValues.push(false);
      }
    }, error => {
      console.log(error)
    });
  }

  offerClicked(){
    let obj = [];
    for(let i=0; i<this.myItemsArr.length; i++){
      if(this.checkboxValues[i]){
        obj.push(this.myItemsArr[i]);
      }
    }
    this.offerDialogRef.close(obj);
  }

  cancelClicked(){
    this.offerDialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { MatDialog } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {

  myItemsArr = [];

  constructor(
    private itemsService: ItemsService,
    private addDialog: MatDialog,
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {
    this.itemsService.itemsPost({}).subscribe( (p: []) => {
      this.myItemsArr = [...p];
      console.log(p);
    }, error => {
      console.log(error)
    });
  }

  addClicked(){
    const addDialogRef = this.addDialog.open(AddDialogComponent, {
      width: '400px',
      height: ''
    });

    addDialogRef.afterClosed().subscribe(result => {
      if(!this.userProfileService.userSignedIn) return;

      console.log(result);
      result["user_id"] = this.userProfileService.userId;
      
    })
  }

}
import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';
import { UserProfileService } from '../services/user-profile.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messagesArr = [];

  constructor(
    private requestsService: RequestsService,
    private userProfileService: UserProfileService
  ) { }

  ngOnInit() {
    this.requestsService.requestPost({ from_user_id : this.userProfileService.userId}).subscribe((p: []) => {
      this.messagesArr = [...p];
      console.log(this.messagesArr);
    }, error => {
      console.log(error);
    });
  }

}

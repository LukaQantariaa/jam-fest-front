import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  userSignedIn: boolean = false;
  userId: number = -1;

  constructor() { }
}

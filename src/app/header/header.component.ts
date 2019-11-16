import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoUrl: string = '../../assets/pictures/logo-01.png';
  userIconUrl:string = '../../assets/pictures/profileIcon-01.png';

  constructor() { }

  ngOnInit() {
  }

}

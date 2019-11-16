import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoUrl: string = '../../assets/pictures/logo-01.png';
  userIconUrl:string = '../../assets/pictures/profileIcon-01.png';

  searchInputVisible: boolean = false;

  constructor() { }

  ngOnInit() {
   
  }

  onSearchClick(){
  }
}

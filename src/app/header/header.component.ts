import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoUrl: string = '../../assets/pictures/logo-01.png';
  userIconUrl:string = '../../assets/pictures/profileIcon-01.png';

  searchInputVisible: boolean = false;

  categoryArr = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
   this.categoryService.categoryGet().subscribe( (p:[]) => {
     this.categoryArr = [...p];
     console.log(p)
   }, error => {
     console.log(error)
   })
  }

  onSearchClick(){
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login.dialog/login.dialog.component';
import { RegisterDialogComponent } from './register.dialog/register.dialog.component';

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
    private categoryService: CategoryService,
    private loginDialog: MatDialog,
    private registerDialog: MatDialog
  ) { }

  ngOnInit() {
   this.categoryService.categoryGet().subscribe( (p:[]) => {
     this.categoryArr = [...p];
     console.log(p)
   }, error => {
     console.log(error)
   })
  }

  searchClicked(){
    this.searchInputVisible = false;
  }

  onLoginClick(){
    const loginDialogRef = this.loginDialog.open(LoginDialogComponent, {
      width: '400px',
      height: ''
    });
    loginDialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  onSignupClick(){
    const registerDialogRef = this.registerDialog.open(RegisterDialogComponent, {
      width: '400px',
      height: ''
    });

    registerDialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}

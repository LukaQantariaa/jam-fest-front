import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material';
import { LoginDialogComponent } from './login.dialog/login.dialog.component';
import { RegisterDialogComponent } from './register.dialog/register.dialog.component';
import { LoginService } from '../services/login.service';
import { UserProfileService } from '../services/user-profile.service';

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
    private registerDialog: MatDialog,
    private loginService: LoginService,
    private userProfileService: UserProfileService
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
      let params = result;
      params.password = 'paroli';
      this.loginService.loginPost(params).subscribe( (p: any) => {
        this.userProfileService.userSignedIn = true;
        this.userProfileService.userId = p.info.user_id;
      }, error => {
        console.log(error);
        this.userProfileService.userSignedIn = false;
        this.userProfileService.userId = -1;
      });
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

  onLogOut(){
    this.userProfileService.userSignedIn = false;
    this.userProfileService.userId = -1;
  }

}

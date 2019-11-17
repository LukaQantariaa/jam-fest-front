import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserProfileService } from '../services/user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private userProfileService: UserProfileService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.userProfileService.userSignedIn){
      return true;
    } else {
      this._router.navigate(['/']);
      return false;
    }
  }
}

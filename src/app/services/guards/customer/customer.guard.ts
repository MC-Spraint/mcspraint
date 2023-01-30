import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/http/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {

  constructor(
    private _router: Router, 
    private _auth: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._auth.loggedInUser()==true) {
        return true;
      }
      else{
        this._router.navigate(['/auth/login'])
        return false;
    }
  }
  
}

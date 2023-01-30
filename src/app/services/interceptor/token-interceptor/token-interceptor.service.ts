import { Injectable } from '@angular/core';

import { HttpInterceptor } from '@angular/common/http';//(Below class implements HttpInterceptor)
import { Injector } from '@angular/core';
import { AuthService } from '../../../services/http/auth/auth.service'
//! This service is responsible for adding token in each request to keep the user authenticated.

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

  /*This method(reserved keyword) pulls the token from local storage sends sends 
  and sends it to backend for vslidation with every request*/
  intercept(req:any,next:any){
    let authService= this._injector.get(AuthService);
    
    var tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `${authService.getToken()}`,
        }
        //responseType: 'text'
      })
      return next.handle(tokenizedReq);
    
    }
}
//^Different type of service injection,used to help persist authentication

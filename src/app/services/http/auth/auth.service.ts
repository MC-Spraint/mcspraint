import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = "http://localhost:3000"

  constructor(private http: HttpClient) { }
  //signup
  signUp(user:any){
    return this.http.post<any>(this.baseUrl+"/register" , user);
  }
  verify(user:any){//useless prolly
    return this.http.post<any>(this.baseUrl+"/verify" , user)
  }

  //login
  logIn(user:any){
    return this.http.post<any>(this.baseUrl+"/login" , user);
  }
  getToken():any{
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  loggedInUser(){
    return !!localStorage.getItem('token');
  }
  loggedInAdmin():boolean{
    if(typeof localStorage.getItem('user') === 'string') {
      let userInString : any = localStorage.getItem('user');
      let userInObject = JSON.parse(userInString)
      if(userInObject.role==="admin"){
        return true
      }
      else{
        return false
      }}
    else{
      return false 
    }
  }
}


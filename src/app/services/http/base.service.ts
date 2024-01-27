import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl:string = environment.production 
    ? "https://fresh-api.onrender.com" 
    : "http://localhost:4200";

  constructor(private http: HttpClient) { }

  sendMessage(user:any){
    return this.http.post<any>(this.baseUrl+"/api/contact/save",user);
  }
}

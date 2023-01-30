import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private baseUrl:string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  sendMessage(user:any){
    return this.http.post<any>(this.baseUrl+"/contact",user)
  }
}

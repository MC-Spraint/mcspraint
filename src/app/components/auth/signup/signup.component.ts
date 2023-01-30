import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/http/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit,DoCheck {

  checkPass:boolean = true;
  signUpUserData: any = {name: "", email: "", password: ""};
  repeatPass:string="";

  constructor(private _toastr: ToastrService,
              private _router: Router,
              private _auth: AuthService) { }

  ngOnInit(): void {
  }
  ngDoCheck():void {
    if(this.signUpUserData.password!=this.repeatPass){
      console.log("p not matching");
      this.checkPass=true;
    }
    else{ 
      this.checkPass=false;
    }
  }

  signUpUser():any {
    //console.log(this.registerUserData);
    this._auth.signUp(this.signUpUserData)
    .subscribe(
      (res) =>{
        console.log(res);
        this._toastr.success(res.message,`Success: ${res.status}`);
      },
      (err) =>{
			console.log(err);
      this._toastr.error(err.error.message,`Error: ${err.error.status}`);
    })
  }

}

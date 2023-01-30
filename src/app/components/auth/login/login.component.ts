import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/http/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData: any = {};

  constructor(
              private _toastr: ToastrService,
              private _router: Router,
              private _auth: AuthService) { }

  ngOnInit(): void {
  }

  logInUser(){
    this._auth.logIn(this.loginUserData)
    .subscribe(
      (res)=>{
        console.log(res);
        this._router.navigate(['/home']);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user',JSON.stringify(res.data.user));
        this._toastr.success(res.message,`Success: ${res.status}`)
      },
      (err)=>{
        console.log(err);
        this._toastr.error(err.error.message,`Error: ${err.error.status}`)
      }
    )
  }

}

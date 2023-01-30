import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Import components here
import { SignupComponent } from '../../components/auth/signup/signup.component';
import { LoginComponent } from '../../components/auth/login/login.component';
import { WelcomeComponent } from '../../components/auth/welcome/welcome.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

@Component({
  selector: 'app-auth-page',
  template: `
    <div style="padding-top:7rem;"></div>
    <ng-container *ngComponentOutlet="out"></ng-container>
  `,
  styles: [
  ]
})
export class AuthPageComponent implements OnInit {

  out:any;
  page:string ="";
  errPage:boolean =false;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit():any {
    
    this.page=this.activatedRoute.snapshot.paramMap.get('id') as string;
    
    if(this.page==="signup"){
      this.out=SignupComponent;
    }
    else if(this.page==="login"){
      this.out=LoginComponent;
    }
    else if(this.page==="welcome"){
      this.out=WelcomeComponent;
    }
    else{
      this.errPage=true;
      this.out=ErrorPageComponent;
    }
  }

}

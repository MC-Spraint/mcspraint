import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormArray, FormControlName, Validators } from '@angular/forms';
import { BaseService } from 'src/app/services/http/base.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public user: FormGroup = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(5),Validators.pattern('[a-zA-Z]+ [a-zA-Z]+$')]),
    email: new FormControl("",[Validators.required, Validators.minLength(5),Validators.email]),
    message: new FormControl("",[Validators.required, Validators.minLength(5)])
  });
  e:any;
  public page: any;
  constructor(
              private _toastr: ToastrService,
              private activatedRoute: ActivatedRoute,
              private _baseService: BaseService) { }

  ngOnInit(): void {
    this.page = this.activatedRoute.snapshot.paramMap.get('id');
  }
  

  get name(): FormControl{return <FormControl>this.user.get('name');}
  get email(): FormControl{return <FormControl>this.user.get('email');}
  get message(): FormControl{return <FormControl>this.user.get('message');}
  //get rating(): FormArray{return <FormArray>this.user.get('rating');}

  change(event:any){
    this.e=event.target.value;
  }
  
  //you must have to write type="submit" in the button tag for it to work
  sendMsg(){
    this._baseService.sendMessage(this.user.value)
    .subscribe(
      (res)=>{
        this.user.reset();
        this._toastr.success(res.message,`Success: ${res.status}`);
      },
      (err)=>{
        console.log(err);
        this._toastr.error(err.error.message,`Error: ${err.error.status}`);
      })
  }
  
}

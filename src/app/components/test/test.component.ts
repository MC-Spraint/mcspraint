import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormControlName, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public statuses: Array<String> = ["In Stock", "Out Of Stock"];
  
  public myForm: FormGroup = new FormGroup({
    productInfo: new FormGroup({
      productName: new FormControl("", [Validators.minLength(5), Validators.required]),
      imgUrl: new FormControl("", [Validators.required])
    }),
    status: new FormControl("In Stock"),
    sizes: new FormArray([])
  });

  public constructor() { }

  public ngOnInit(): void {
  }
  //Getters of form controls
  get productName(): FormControl{return <FormControl>this.myForm.value.productInfo.productName;}
  get imgUrl(): FormControl{return <FormControl>this.myForm.value.productInfo.imgUrl;}
  get status(): FormControl{return <FormControl>this.myForm.value.status;}
  get sizes(): FormControl{return <FormControl>this.myForm.value.sizes;}

  customAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise: Promise<any> = new Promise<any>((resolve, reject) => {
      setTimeout(() =>{
        if(control.value==="Shampoo") resolve({"isInvalidName": true});
        else resolve(null);
      },1500);
    });
    return promise;
  }
  logForm():void{
    console.log(this.myForm);
    this.myForm.reset();
  }
  onAdd():void{ 
    const newControl: FormControl= new FormControl("", [Validators.required]);
    (<FormArray>this.myForm.controls.sizes).push(newControl);//pushing into controls object of FormGroup
  }

}

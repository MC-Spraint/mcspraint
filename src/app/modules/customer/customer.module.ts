import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule {
  constructor(){
    console.log("Customer module loaded");
  }
}

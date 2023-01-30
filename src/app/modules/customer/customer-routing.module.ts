import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './../../pages/users-page/customer-page/customer-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

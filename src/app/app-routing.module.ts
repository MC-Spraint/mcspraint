import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  { path: "other/:id", component: OthersPageComponent },
  { path: "auth/:id", component: AuthPageComponent },

  { path: "customer", loadChildren: () =>import("./modules/customer/customer.module")
                                    .then((mod:any)=>mod.CustomerModule) },

  { path: "admin", loadChildren: () =>import("./modules/admin/admin.module")
                                    .then((mod:any)=>mod.AdminModule) },

  { path: "developer", loadChildren: () =>import("./modules/developer/developer.module")
                                    .then((mod:any)=>mod.DeveloperModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

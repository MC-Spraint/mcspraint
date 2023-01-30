//* Import mandatory modules here 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//* Import router related modules here
import { AppRoutingModule } from './app-routing.module';
import { RouteReuseStrategy } from '@angular/router';
import { RouterReuse } from './services/routerReuse/router-reuse';

//& Import animations, icons, etc & modules here
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseRouteReuseStrategy } from '@angular/router';


//^ Services starts
//! Import http services
import { AuthService } from './services/http/auth/auth.service';
import { BaseService } from './services/http/base.service';
//! Import Guards services (for protecting routes)
import { CustomerGuard } from './services/guards/customer/customer.guard'; 
import { AdminGuard } from './services/guards/admin/admin.guard'; 
//! Important for sticking token to every http request to keep users authenticated.
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/interceptor/token-interceptor/token-interceptor.service';
//^ Services ends


//^ Pages & Components starts
//! Import pages here
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { CustomerPageComponent } from './pages/users-page/customer-page/customer-page.component';
import { AdminPageComponent } from './pages/users-page/admin-page/admin-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
//! Import components here
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeStarterComponent } from './components/home-starter/home-starter.component';
import { OtherStarterComponent } from './components/other-starter/other-starter.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { MoreComponent } from './components/more/more.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { ListComponent } from './components/services/list/list.component';
import { ContactComponent } from './components/contact/contact.component';
  //?auth components
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { WelcomeComponent } from './components/auth/welcome/welcome.component';
  //?admin Components
import { StoreComponent } from './components/users/admin/store/store.component';
import { DashboardComponent } from './components/users/admin/dashboard/dashboard.component';
import { EmployeesComponent } from './components/users/admin/employees/employees.component';
import { EmployeeDetailsComponent } from './components/users/admin/employee-details/employee-details.component';
  //?customer components
import { CartComponent } from './components/users/customer/cart/cart.component';
import { OrdersComponent } from './components/users/customer/orders/orders.component';
import { OrderDetailsComponent } from './components/users/customer/order-details/order-details.component';
import { StoresComponent } from './components/users/customer/stores/stores.component';
import { StoreDetailsComponent } from './components/users/customer/store-details/store-details.component';
import { TestComponent } from './components/test/test.component';







//^ Pages & Components starts







@NgModule({
  declarations: [
    //Pages
    HomePageComponent,
    OthersPageComponent,
    ErrorPageComponent,
    CustomerPageComponent,
    AdminPageComponent,
    
    
    //Components
    NavbarComponent,
    FooterComponent,
    OtherStarterComponent,
    HomeStarterComponent,
    AppComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    MoreComponent,
    CertificatesComponent,
    TestimonialsComponent,
    ListComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    AuthPageComponent,
    StoreComponent,
    DashboardComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    CartComponent,
    OrdersComponent,
    OrderDetailsComponent,
    StoresComponent,
    StoreDetailsComponent,
    TestComponent,
    


    
    
    
  ],
  imports: [
  //mandatory modules
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //icons & animations
    FontAwesomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
      maxOpened:0
    })
  ],
  providers: [
    //http
    AuthService,
    BaseService,
    //guards
    CustomerGuard,
    AdminGuard,

    //interceptor
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi: true
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouterReuse
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("App module loaded");
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OtherStarterComponent } from './components/other-starter/other-starter.component';
import { HomeStarterComponent } from './components/home-starter/home-starter.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OtherComponent } from './components/other/other.component';




import { BaseRouteReuseStrategy } from '@angular/router';
import { RouterReuse } from './routerReuse/router-reuse';
import { EducationComponent } from './components/education/education.component';
import { MoreComponent } from './components/more/more.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OtherStarterComponent,
    HomeStarterComponent,
    OtherComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    MoreComponent
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: RouterReuse}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

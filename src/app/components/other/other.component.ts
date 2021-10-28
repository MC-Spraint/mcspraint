import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { OtherStarterComponent } from '../other-starter/other-starter.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { MoreComponent } from '../more/more.component';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
  
  
  othst=OtherStarterComponent;
out:any;
page:string ="";
pg:any;
about:boolean = false;
skills:boolean = false;
projects:boolean = false;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit():any {
    
    this.page=this.activatedRoute.snapshot.paramMap.get('id') as string;
    if(this.page==="about"){
      this.out=AboutComponent;
      
      
    }
    else if(this.page==="skills"){
      this.out=SkillsComponent;
      
    }
    else if(this.page==="projects"){
      this.out=ProjectsComponent;
      
    }
    else if(this.page==="more"){
      this.out=MoreComponent;
      
    }
  }
  
  
}

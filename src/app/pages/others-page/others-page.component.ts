import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Import components here
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { MoreComponent } from '../../components/more/more.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CertificatesComponent } from '../../components/certificates/certificates.component';
import { ListComponent } from '../../components/services/list/list.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ErrorPageComponent } from '../error-page/error-page.component';

@Component({
  selector: 'app-others-page',

  template:`
  <app-other-starter *ngIf="!this.errPage"></app-other-starter>
  <ng-container *ngComponentOutlet="out"></ng-container>
  `,

  styles: []
})
export class OthersPageComponent implements OnInit {

    out:any;
    page:string ="";
    errPage:boolean = false;
    constructor(private activatedRoute: ActivatedRoute) { }
  
    ngOnInit():any {
      
      this.page=this.activatedRoute.snapshot.paramMap.get('id') as string;
      
      if(this.page==="about"){
        this.out=AboutComponent;
      }
      else if(this.page==="testimonials"){
        this.out=TestimonialsComponent;
      }
      else if(this.page==="services"){
        this.out=ListComponent;
      }
      else if(this.page==="skills"){
        this.out=SkillsComponent;
      }
      else if(this.page==="projects"){
        this.out=ProjectsComponent;
      }
      else if(this.page==="certificates"){
        this.out=CertificatesComponent;
      }
      else if(this.page==="contact"){
        this.out=ContactComponent;
      }
      else if(this.page==="more"){
        this.out=MoreComponent;
      }
      else{
        this.errPage=true;
        this.out=ErrorPageComponent;
      }
    }
    
    
  }
  
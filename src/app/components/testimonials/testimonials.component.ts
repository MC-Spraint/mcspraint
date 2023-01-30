import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  myScriptElement: any;

  constructor() {
    this.myScriptElement=document.createElement('script');
    this.myScriptElement.src="/assets/images/testimonials/test.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
    
  }

}

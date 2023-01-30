import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  
  template:`
  <app-home-starter style="overflow:auto;"></app-home-starter>
  <app-certificates></app-certificates>
  <app-about></app-about>
  <app-list></app-list>
  <app-projects></app-projects>
  <app-skills></app-skills>
  <app-testimonials></app-testimonials>
  <app-contact></app-contact>
  <!--<app-test></app-test> -->

`,
  styles: [ ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

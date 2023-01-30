import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
  <div style="padding-top:7rem; background:rgb(29, 28, 28);"></div>
  <h2 class="m-5 p-5 text-danger">This page does not exist</h2>
  `,
  styles: []
})
export class ErrorPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-starter',
  templateUrl: './home-starter.component.html',
  styleUrls: ['./home-starter.component.scss'],
})
export class HomeStarterComponent implements OnInit {
  pic:string = "/assets/images/eye1.png";

  constructor() { }

  ngOnInit() {}

}

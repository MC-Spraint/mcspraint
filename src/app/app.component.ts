import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'McSpraint';
  constructor(){}
  ngOnInit(){
    AOS.init(
      {offset:300,
      duration:1000}
    );
  }
  
}

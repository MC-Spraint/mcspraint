import { Component,OnInit } from '@angular/core';

//import animation and icon library
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
      {duration:1000, delay:0}
    );
  }
  

}

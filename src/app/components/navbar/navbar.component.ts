import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
page:any;
public appPages = [
  
  { title: 'About', url: '/other/about' },
  { title: 'Skills', url: '/other/skills' },
  { title: 'Projects', url: '/other/projects' },
  { title: 'More', url: '/other/more' }]
  constructor() { }

  ngOnInit() {
   
  }
  
}

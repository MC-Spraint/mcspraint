import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/http/auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
page:any;
public appPages = [
  
  { title: 'About', url: '/other/about' },
  { title: 'Services', url: '/other/services' }

]
public morePages = [
  { title: 'Skills', url: '/other/skills' },
  { title: 'Contact', url: '/other/contact' },
  { title: 'Projects', url: '/other/projects' },
  { title: 'Testimonials', url: '/other/testimonials' },
  { title: 'Certificates', url: '/other/certificates' },
  { title: 'More Comming', url: '/other/more' }
  
]

  constructor(public readonly _auth: AuthService) { }

  ngOnInit() {
  }
  
  
}

import { Component, OnInit } from '@angular/core';

import { faTwitter, faInstagram, faFacebook, faYoutube, faWhatsapp, faServicestack } from '@fortawesome/free-brands-svg-icons';
import { faHome, faAddressCard, faHandshake, faGlobe, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //from brands-svg-icons
  faTwitter=faTwitter;
  faInstagram=faInstagram;
  faFacebook=faFacebook;
  faYoutube=faYoutube;
  faWhatsapp=faWhatsapp;
  faServicestack=faServicestack;

  //from solid-svg-icons
  faHandshake=faHandshake;
  faHome=faHome;
  faAddressCard=faAddressCard;
  faGlobe=faGlobe;
  faPhone=faPhone;
  faEnvelopeOpen=faEnvelopeOpen;

  //from regular-svg-icons8

}

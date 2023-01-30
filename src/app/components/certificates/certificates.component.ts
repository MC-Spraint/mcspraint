import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  public page: any;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

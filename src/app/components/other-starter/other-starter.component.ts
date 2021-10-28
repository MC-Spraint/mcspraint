import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-other-starter',
  templateUrl: './other-starter.component.html',
  styleUrls: ['./other-starter.component.scss'],
})
export class OtherStarterComponent implements OnInit {
  page:any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.page = this.activatedRoute.snapshot.paramMap.get('id');
    
  }

}

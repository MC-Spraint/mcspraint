import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  public page: any;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public page: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
}

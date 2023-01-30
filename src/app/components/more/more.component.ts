import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  public page: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

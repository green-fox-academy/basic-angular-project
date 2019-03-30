import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public title: string;
  public message: string;

  constructor() {
    this.title = '404';
    this.message = 'Not Found';
  }

  ngOnInit() {
  }

}

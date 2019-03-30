import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  public title: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTitle().subscribe((data) => {
      this.title = data.title;
    });
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:string;

  constructor() {
    this.title = "Aplicación Web Angular 4 y API REST PHP"
  }

  ngOnInit() {
  }

}

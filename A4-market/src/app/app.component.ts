import { Component } from '@angular/core';
import { GLOBAL } from './configuracion-global'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular 4 Market';
  public color_background:string;

  constructor(){
    this.color_background = GLOBAL.color_background;
  }
}

import { Component } from '@angular/core';
import { Categories } from './interfaces/general-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'jamos-photography';
  categories: Array<Categories> = [
  {
    title: 'Landscape'
  },
  {
    title: 'Portrait'
  },
  {
    title: 'Fashion'
  },
  {
    title: 'Arty'
  }];

}

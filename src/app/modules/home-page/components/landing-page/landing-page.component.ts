import { Component, OnInit } from '@angular/core';
import { Categories } from '../../interfaces/categories';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  categoriesArray: Array<Categories> = [
    {
      title: 'Landscape',
      code: 'landscape',
      path: '/landscape'
    },
    {
      title: 'Portrait',
      code: 'portrait',
      path: '/portrait'
    },
    {
      title: 'Fashion',
      code: 'fashion',
      path: '/fashion'
    },
    {
      title: 'Long exposure',
      code: 'longexposure',
      path: '/longexposure'
    }
  ];
}

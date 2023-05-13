import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: any = [
    { url: 'assets/IMG_6970.jpeg' },
    { url: 'assets/IMG_6976.jpeg' },
    { url: 'assets/IMG_6986.jpeg' },
    { url: 'assets/IMG_6989.jpeg' }
  ];
  currentIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  getCurrentSlideUrl(): string {
    return `url(${this.slides[this.currentIndex].url})`;
  }

  selectSlide(selectedIndex) {
    this.currentIndex = selectedIndex;
  }
}

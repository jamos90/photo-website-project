import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ImageSliderComponent } from './components/partials/image-slider/image-slider.component';
import { SideNavComponent } from './components/partials/side-nav/side-nav.component';

@NgModule({
  declarations: [LandingPageComponent, ImageSliderComponent, SideNavComponent],
  imports: [CommonModule],
  exports: [LandingPageComponent]
})
export class HomePageModuleModule {}

import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { CommonModule } from '@angular/common';
import { OurMenu } from './our-menu/our-menu';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, LandingPageComponent, OurMenu],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {

}

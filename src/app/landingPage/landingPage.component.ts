import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section>
    <h1>SAKURA RAMEN</h1>
    <h2>Experience the authentic taste of Japan</h2>
  </section>`,
  styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
  <section>
    <app-navbar></app-navbar>
    <h1 class="font-raleway">SAKURA RAMEN</h1>
    <h2 class="font-raleway">Experience the authentic taste of Japan</h2>
  </section>`,
  styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {
}
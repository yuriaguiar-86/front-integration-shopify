import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-page',
  standalone: false,
  templateUrl: './footer-page.html',
  styleUrl: './footer-page.css',
})
export class FooterPage {
  readonly yearCurrent: number = (new Date).getFullYear();
}

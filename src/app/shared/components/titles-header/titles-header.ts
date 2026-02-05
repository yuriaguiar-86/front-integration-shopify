import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titles-header',
  standalone: false,
  templateUrl: './titles-header.html',
  styleUrl: './titles-header.css',
})
export class TitlesHeader {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() textBtn!: string;
}

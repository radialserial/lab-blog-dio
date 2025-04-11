import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-large',
  imports: [RouterLink],
  templateUrl: './card-large.component.html',
  styleUrl: './card-large.component.css'
})
export class CardLargeComponent {
  @Input() title: string = "";
  @Input() createdDate: Date = new Date();
  @Input() synopsis: string = "";
  @Input() author: string = "";
  @Input() imageSrc: string = "";
  @Input() contents: string = "";
}

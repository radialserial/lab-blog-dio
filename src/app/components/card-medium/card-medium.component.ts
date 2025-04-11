import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-medium',
  imports: [RouterLink],
  templateUrl: './card-medium.component.html',
  styleUrl: './card-medium.component.css'
})
export class CardMediumComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) createdDate!: Date;
  @Input({ required: true }) synopsis!: string;
  @Input({ required: true }) author!: string;
  @Input({ required: true }) imageSrc!: string;
  @Input({ required: true }) contents!: string;
}

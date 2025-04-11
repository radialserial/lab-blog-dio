import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import Utils from '../../util';

@Component({
  selector: 'app-card-large',
  imports: [RouterLink],
  templateUrl: './card-large.component.html',
  styleUrl: './card-large.component.css'
})
export class CardLargeComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) createdDate!: Date;
  @Input({ required: true }) synopsis!: string;
  @Input({ required: true }) author!: string;
  @Input({ required: true }) imageSrc!: string;
  @Input({ required: true }) contents!: string;

  slug = Utils.slug;
}

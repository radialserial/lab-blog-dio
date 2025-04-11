import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-medium',
  imports: [RouterLink],
  templateUrl: './card-medium.component.html',
  styleUrl: './card-medium.component.css'
})
export class CardMediumComponent {
  @Input() title: string = "";
  @Input() createdDate: Date = new Date();
  @Input() synopsis: string = "";
  @Input() author: string = "";
  @Input() imageSrc: string = "";
  @Input() articleIndex: any;
}

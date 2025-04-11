import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-title-bar',
  imports: [RouterLink],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {

  // Repeat title so that it "spills out" of page stylistically
  titleRepeatNumber = 25;
  halfwayNumber = Math.floor(this.titleRepeatNumber / 2);

}

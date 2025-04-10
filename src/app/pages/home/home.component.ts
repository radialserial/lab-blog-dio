import { Component } from '@angular/core';
import { TitleBarComponent } from "../../components/title-bar/title-bar.component";

@Component({
  selector: 'app-home',
  imports: [TitleBarComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

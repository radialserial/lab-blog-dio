import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleBarComponent } from "./components/title-bar/title-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleBarComponent, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-blog-dio';
}

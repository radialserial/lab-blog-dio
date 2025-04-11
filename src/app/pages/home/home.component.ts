import { Component } from '@angular/core';
import { TitleBarComponent } from "../../components/title-bar/title-bar.component";
import { ArticleListComponent } from "../../components/article-list/article-list.component";

@Component({
  selector: 'app-home',
  imports: [TitleBarComponent, ArticleListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

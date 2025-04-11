import { Component, inject } from '@angular/core';
import { Article } from '../../model/Article';
import { ArticleService } from '../../services/article.service';
import { CardLargeComponent } from "../card-large/card-large.component";
import { CardMediumComponent } from '../card-medium/card-medium.component';

@Component({
  selector: 'app-article-list',
  imports: [CardMediumComponent, CardLargeComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent {

  articleService = inject(ArticleService);

  articleList: Article[] = this.articleService
    .getArticles()
    .sort((a, b) => {
      if (a.createdDate < b.createdDate) {
        return 1;
      } else if (a.createdDate > b.createdDate) {
        return -1;
      } else {
        return 0;
      }
    });

}

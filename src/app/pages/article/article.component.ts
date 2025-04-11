import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleBarComponent } from "../../components/title-bar/title-bar.component";
import { Article } from '../../model/Article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article',
  imports: [TitleBarComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  private activatedRoute = inject(ActivatedRoute);
  private articleService = inject(ArticleService);

  articleSlug = this.activatedRoute.snapshot.params['slug'];

  article: Article = this.articleService.getArticle(this.articleSlug);
}

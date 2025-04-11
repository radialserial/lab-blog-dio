import { Injectable } from '@angular/core';
import articlesData from '../../../mock/articles.json';
import { Article } from '../model/Article';
import Utils from '../util';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles(): Article[] {
    return articlesData.map(articleFromJson => {
      return {
        title: articleFromJson.title,
        createdDate: new Date(articleFromJson.createdDate),
        synopsis: articleFromJson.synopsis,
        content: articleFromJson.content,
        author: articleFromJson.author,
        imageSrc: articleFromJson.imageSrc,
      };
    })
  }

  getArticle(articleSlug: string): Article {
    const articles = this.getArticles();

    for (let index = 0; index < articles.length; index++) {
      if (Utils.slug(articles[index].title) === articleSlug) {
        return articles[index];
      }
    }

    throw ("Article does not exist.")
  }

}

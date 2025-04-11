import { Injectable } from '@angular/core';
import articlesData from '../../../mock/articles.json';
import { Article } from '../model/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articlesJSON = JSON.stringify(articlesData)

  constructor() { }

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

}

import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Stackoverflow', 'http://stackoverflow.com', 20),
      new Article('Github', 'http://github.com', 5)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Se agrego el link: ${link.value} con el título: ${title.value}`);
    return false;
  }
}

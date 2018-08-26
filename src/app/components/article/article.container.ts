import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import { AppState } from '../../store/AppState';
import { Article } from '../../domain/article/Article';
import * as selectedArticleSelectors from '../../store/selected-article/selected-article.selectors';

@Component({
  selector: 'app-article-container',
  template: `
    <app-article [article]="article$ | async"></app-article>
  `
})
export class ArticleContainer implements OnInit {
  article$: Observable<Article>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.article$ = this.store
      .pipe(
        select(selectedArticleSelectors.getSelectedArticle)
      );
  }
}

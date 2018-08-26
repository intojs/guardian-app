import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import { AppState } from '../../store/AppState';
import { Article } from '../../domain/article/Article';
import { getSelectedArticle } from '../../store/selected-article/selected-article.selectors';
import * as articleSelectors from '../../store/article/article.selectors';
import * as articleActions from '../../store/article/actions/article.actions';

@Component({
  selector: 'app-article-list-container',
  template: `
    <app-article-list
      [articles]="articles$ | async"
      [selectedArticle]="selectedArticle$ | async"
      (selectArticle)="onArticleSelect($event)"
    >
    </app-article-list>
  `
})
export class ArticleListContainer implements OnInit {
  articles$: Observable<Article[]>;
  selectedArticle$: Observable<Article>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new articleActions.GetArticles());
    this.articles$ = this.store
      .pipe(
        select(articleSelectors.selectAllArticles)
      );
    this.selectedArticle$ = this.store
      .pipe(
        select(getSelectedArticle)
      );
  }

  onArticleSelect(article: Article) {
    this.store.dispatch(new articleActions.SelectArticle(article));
  }
}

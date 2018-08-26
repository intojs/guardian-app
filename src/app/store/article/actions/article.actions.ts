import { Action } from '@ngrx/store';

import { ArticleActionTypes } from './ArticleActionTypes';
import { ArticleResponse } from '../../../domain/article-response/ArticleResponse';
import { Article } from '../../../domain/article/Article';

export class GetArticles implements Action {
  readonly type = ArticleActionTypes.GET_ARTICLES;
}

export class GetArticlesSuccess implements Action {
  readonly type = ArticleActionTypes.GET_ARTICLES_SUCCESS;

  constructor(public payload: ArticleResponse) {
  }
}

export class GetArticlesError implements Action {
  readonly type = ArticleActionTypes.GET_ARTICLES_ERROR;

  constructor(public payload: Error) {
  }
}

export class SelectArticle implements Action {
  readonly type = ArticleActionTypes.SELECT_ARTICLE;

  constructor(public payload: Article) {
  }
}

export type All =
  GetArticles |
  GetArticlesSuccess |
  GetArticlesError |
  SelectArticle;

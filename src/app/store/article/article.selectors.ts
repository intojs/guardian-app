import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { ArticleState } from './state/ArticleState';
import { Article } from '../../domain/article/Article';
import { AppState } from '../AppState';
import * as articleReducer from './reducer/article.reducer';

export const selectArticleState = createFeatureSelector<ArticleState>('articles');

export const selectAllArticles: MemoizedSelector<AppState, Article[]> = createSelector(
  selectArticleState,
  articleReducer.selectAllArticles
);

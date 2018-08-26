import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AppState } from '../AppState';
import { ArticleStatus } from './state/ArticleStatus';
import * as articleStatusReducer from './reducer/article-status.reducer';

export const selectArticleStatus = createFeatureSelector<ArticleStatus>('articleStatus');

export const selectError: MemoizedSelector<AppState, Error | undefined> = createSelector(
  selectArticleStatus,
  articleStatusReducer.selectError
);

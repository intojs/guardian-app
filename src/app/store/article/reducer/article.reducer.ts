import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Article } from '../../../domain/article/Article';
import { ArticleActionTypes } from '../actions/ArticleActionTypes';
import { ArticleState } from '../state/ArticleState';
import * as articleResponseService from '../../../domain/article-response/ArticleResponse.service';
import * as articleActions from '../actions/article.actions';

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>();

export const initialState: ArticleState = adapter.getInitialState();

export function reducer(state = initialState, action: articleActions.All): ArticleState {
  switch (action.type) {
    case ArticleActionTypes.GET_ARTICLES_SUCCESS: {
      return adapter.addAll(articleResponseService.getResults(action.payload), state);
    }
    default: {
      return state;
    }
  }
}

const {selectAll} = adapter.getSelectors();

export const selectAllArticles = selectAll;

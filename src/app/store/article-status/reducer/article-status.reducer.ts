import { ArticleActionTypes } from '../../article/actions/ArticleActionTypes';
import { ArticleStatus } from '../state/ArticleStatus';
import * as articleActions from '../../article/actions/article.actions';

export const initialState: ArticleStatus = {
  loading: false
};

export function reducer(state = initialState, action: articleActions.All): ArticleStatus {
  switch (action.type) {
    case ArticleActionTypes.GET_ARTICLES: {
      return {
        ...state,
        loading: true
      };
    }
    case ArticleActionTypes.GET_ARTICLES_SUCCESS: {
      return {
        loading: false
      };
    }
    case ArticleActionTypes.GET_ARTICLES_ERROR: {
      return {
        error: action.payload,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
}


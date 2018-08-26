import { ArticleMetas } from '../state/ArticleMetas';
import { ArticleActionTypes } from '../../article/actions/ArticleActionTypes';
import * as articleActions from '../../article/actions/article.actions';
import * as articleResponseService from '../../../domain/article-response/ArticleResponse.service';

export const initialState: ArticleMetas | undefined = undefined;

export function reducer(state = initialState, action: articleActions.All): ArticleMetas | undefined {
  switch (action.type) {
    case ArticleActionTypes.GET_ARTICLES_SUCCESS: {
      return articleResponseService.getArticleMetas(action.payload);
    }
    default: {
      return state;
    }
  }
}

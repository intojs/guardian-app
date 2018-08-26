import { ArticleActionTypes } from '../../article/actions/ArticleActionTypes';
import { Article } from '../../../domain/article/Article';
import * as articleActions from '../../article/actions/article.actions';
import * as articleResponseService from '../../../domain/article-response/ArticleResponse.service';
import * as articleService from '../../../domain/article/Article.service';

export const initialState: Article | undefined = undefined;

export function reducer(state = initialState, action: articleActions.All): Article | undefined {
  switch (action.type) {
    case ArticleActionTypes.GET_ARTICLES_SUCCESS: {
      return articleService.findFirstArticle(articleResponseService.getResults(action.payload));
    }
    case ArticleActionTypes.SELECT_ARTICLE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

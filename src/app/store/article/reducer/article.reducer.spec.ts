import { getArticleMock } from '../../../domain/article/Article.mock';
import { getArticleStateMock } from '../state/ArticleState.mock';
import { getArticleResponseMock } from '../../../domain/article-response/ArticleResponse.mock';
import { ArticleActionTypes } from '../actions/ArticleActionTypes';
import * as articleReducer from './article.reducer';
import * as articleActions from '../actions/article.actions';

describe('article.reducer', () => {
  it(`should handle ${ArticleActionTypes.GET_ARTICLES_SUCCESS}`, () => {
    const article1 = getArticleMock({
      id: 'article1'
    });
    const article2 = getArticleMock({
      id: 'article2'
    });
    const response = getArticleResponseMock({
      results: [article1, article2]
    });
    const initialState = getArticleStateMock();
    const expectedState = getArticleStateMock({
      ids: ['article1', 'article2'],
      entities: {
        article1,
        article2
      }
    });
    const action = new articleActions.GetArticlesSuccess(response);
    expect(articleReducer.reducer(initialState, action)).toEqual(expectedState);
  });
});

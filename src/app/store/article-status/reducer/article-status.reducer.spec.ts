import { getArticleStatusMock } from '../state/ArticleStatusMock';
import { getArticleResponseMock } from '../../../domain/article-response/ArticleResponse.mock';
import { ArticleActionTypes } from '../../article/actions/ArticleActionTypes';
import * as articleStatusReducer from './article-status.reducer';
import * as articleActions from '../../article/actions/article.actions';

describe('article-status.reducer', () => {

  describe(`${ArticleActionTypes.GET_ARTICLES}`, () => {
    it(`should set the loading property when a previous error does not exist`, () => {
      const initialState = getArticleStatusMock({
        loading: false
      });
      const action = new articleActions.GetArticles();
      const expectedState = getArticleStatusMock({
        loading: true
      });
      expect(articleStatusReducer.reducer(initialState, action)).toEqual(expectedState);
    });

    it(`should set the loading and error properties`, () => {
      const error = Error('Something bad happened');
      const initialState = getArticleStatusMock({
        loading: false,
        error
      });
      const action = new articleActions.GetArticles();
      const expectedState = getArticleStatusMock({
        loading: true,
        error
      });
      expect(articleStatusReducer.reducer(initialState, action)).toEqual(expectedState);
    });
  });

  it(`should handle ${ArticleActionTypes.GET_ARTICLES_SUCCESS}`, () => {
    const initialState = getArticleStatusMock({
      loading: true,
      error: Error('Something bad happened')
    });
    const expectedState = getArticleStatusMock({
      loading: false
    });
    const action = new articleActions.GetArticlesSuccess(getArticleResponseMock());
    expect(articleStatusReducer.reducer(initialState, action)).toEqual(expectedState);
  });

  it(`should handle ${ArticleActionTypes.GET_ARTICLES_ERROR}`, () => {
    const error = Error('Something bad happened');
    const initialState = getArticleStatusMock({
      loading: true
    });
    const expectedState = getArticleStatusMock({
      loading: false,
      error
    });
    const action = new articleActions.GetArticlesError(error);
    expect(articleStatusReducer.reducer(initialState, action)).toEqual(expectedState);
  });
});


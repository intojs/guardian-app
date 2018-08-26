import { getArticleResponseMock } from '../../../domain/article-response/ArticleResponse.mock';
import { getArticleMock } from '../../../domain/article/Article.mock';
import { ArticleActionTypes } from '../../article/actions/ArticleActionTypes';
import * as articleActions from '../../article/actions/article.actions';
import * as selectedArticleReducer from './selected-article.reducer';

describe('article-metas.reducer', () => {
  it(`should handle ${ArticleActionTypes.GET_ARTICLES_SUCCESS}`, () => {
    const article1 = getArticleMock({id: 'article1'});
    const article2 = getArticleMock({id: 'article2'});
    const results = [article2, article1];
    const response = getArticleResponseMock({results});
    const action = new articleActions.GetArticlesSuccess(response);
    expect(selectedArticleReducer.reducer(undefined, action)).toEqual(article2);
  });

  it(`should handle ${ArticleActionTypes.SELECT_ARTICLE}`, () => {
    const article = getArticleMock();
    const action = new articleActions.SelectArticle(article);
    expect(selectedArticleReducer.reducer(undefined, action)).toEqual(article);
  });
});

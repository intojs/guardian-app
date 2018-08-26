import { getArticleMock } from '../../../domain/article/Article.mock';
import { getArticleResponseMock } from '../../../domain/article-response/ArticleResponse.mock';
import { ArticleActionTypes } from './ArticleActionTypes';
import * as articleActions from './article.actions';

describe('article.actions', () => {
  it(`should ${ArticleActionTypes.GET_ARTICLES}`, () => {
    const action = new articleActions.GetArticles();
    expect(action.type).toEqual(ArticleActionTypes.GET_ARTICLES);
  });

  it(`should ${ArticleActionTypes.GET_ARTICLES_SUCCESS}`, () => {
    const article1 = getArticleMock();
    const article2 = getArticleMock();
    const results = [article1, article2];
    const response = getArticleResponseMock({
      results
    });
    const action = new articleActions.GetArticlesSuccess(response);
    expect(action.type).toEqual(ArticleActionTypes.GET_ARTICLES_SUCCESS);
    expect(action.payload).toEqual(response);
  });

  it(`should ${ArticleActionTypes.GET_ARTICLES_ERROR}`, () => {
    const error = Error('Something bad happened');
    const action = new articleActions.GetArticlesError(error);
    expect(action.type).toEqual(ArticleActionTypes.GET_ARTICLES_ERROR);
    expect(action.payload).toEqual(error);
  });

  it(`should ${ArticleActionTypes.SELECT_ARTICLE}`, () => {
    const article = getArticleMock();
    const action = new articleActions.SelectArticle(article);
    expect(action.payload).toEqual(article);
    expect(action.type).toEqual(ArticleActionTypes.SELECT_ARTICLE);
  });
});

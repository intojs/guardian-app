import { getArticleMetasMock } from '../state/ArticleMetas.mock';
import { getArticleResponseMock } from '../../../domain/article-response/ArticleResponse.mock';
import { ArticleActionTypes } from '../../article/actions/ArticleActionTypes';
import * as articleMetasReducer from './article-metas.reducer';
import * as articleActions from '../../article/actions/article.actions';

describe('article-metas.reducer', () => {
  it(`should handle ${ArticleActionTypes.GET_ARTICLES_SUCCESS}`, () => {
    const response = getArticleResponseMock();
    const expectedState = getArticleMetasMock();
    const action = new articleActions.GetArticlesSuccess(response);
    expect(articleMetasReducer.reducer(undefined, action)).toEqual(expectedState);
  });
});


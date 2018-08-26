import { getArticleResponseMock } from './ArticleResponse.mock';
import { getArticlePayloadMock } from '../article-payload/ArticlePayload.mock';
import { getArticleMock } from '../article/Article.mock';
import * as articleResponseService from './ArticleResponse.service';
import { getArticleMetasMock } from '../../store/article-metas/state/ArticleMetas.mock';

describe('ArticleResponse.service', () => {
  it('should createResponse', () => {
    const response = getArticleResponseMock();
    const payload = getArticlePayloadMock({
      response
    });
    const result = articleResponseService.createResponse(payload);
    expect(result.isOk()).toEqual(true);
    expect(result.getValue()).toEqual(response);
  });

  it('should createResponse when the response is undefined', () => {
    const result = articleResponseService.createResponse();
    expect(result.isError()).toEqual(true);
  });

  it('should createResponse when the response is corrupt', () => {
    const responseWitMissingResults = {
      status: 'ok',
      userTier: 'developer',
      total: 2055762,
      startIndex: 1,
      pageSize: 10,
      currentPage: 1,
      pages: 205577,
      orderBy: 'newest'
    };
    const result = articleResponseService.createResponse(responseWitMissingResults);
    expect(result.isError()).toEqual(true);
  });

  it('should getResults', () => {
    const article1 = getArticleMock();
    const article2 = getArticleMock();
    const results = [article1, article2];
    const articleResponse = getArticleResponseMock({
      results
    });
    expect(articleResponseService.getResults(articleResponse)).toEqual(results);
  });

  it('should getArticleMetas', () => {
    const status = 'ok';
    const userTier = 'developer';
    const total = 2055762;
    const startIndex = 1;
    const pageSize = 10;
    const currentPage = 1;
    const pages = 205577;
    const orderBy = 'newest';
    const article1 = getArticleMock();
    const article2 = getArticleMock();
    const results = [article1, article2];
    const articleResponse = getArticleResponseMock({
      status,
      userTier,
      total,
      startIndex,
      pageSize,
      currentPage,
      pages,
      orderBy,
      results
    });
    const metas = getArticleMetasMock({
      startIndex,
      pageSize,
      currentPage,
      pages,
      orderBy
    });
    expect(articleResponseService.getArticleMetas(articleResponse)).toEqual(metas);
  });
});

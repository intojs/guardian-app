import { getArticleMock } from './Article.mock';
import { getArticleFieldsMock } from '../article-fields/ArticleFields.mock';
import * as articleService from './Article.service';

describe('Article.service.spec', () => {
  it('should findFirstArticle', () => {
    const article1 = getArticleMock({id: 'article1'});
    const article2 = getArticleMock({id: 'article2'});
    expect(articleService.findFirstArticle([article2, article1])).toEqual(article2);
  });

  it('should getThumbnail', () => {
    const thumbnail = 'the-thumbnail';
    const article = getArticleMock({
      fields: getArticleFieldsMock({
        thumbnail
      })
    });
    expect(articleService.getThumbnail(article)).toEqual(thumbnail);
    expect(articleService.getThumbnail()).toEqual(undefined);
  });

  it('should getWebTitle()', () => {
    const webTitle = 'the-webtitle';
    const article = getArticleMock({
      webTitle
    });
    expect(articleService.getWebTitle(article)).toEqual(webTitle);
    expect(articleService.getWebTitle()).toEqual('...');
  });

  it('should getByline()', () => {
    const byline = 'the-by-line';
    const article = getArticleMock({
      fields: getArticleFieldsMock({
        byline
      })
    });
    expect(articleService.getByline(article)).toEqual(byline);
    expect(articleService.getByline()).toEqual('...');
  });

  it('should getBody()', () => {
    const body = 'the-body';
    const article = getArticleMock({
      fields: getArticleFieldsMock({
        body
      })
    });
    expect(articleService.getBody(article)).toEqual(body);
    expect(articleService.getBody()).toEqual('...');
  });

  it('should getWebPublicationDate()', () => {
    const webPublicationDate = '2018-08-21T11:37:48Z';
    const article = getArticleMock({
      webPublicationDate
    });
    expect(articleService.getWebPublicationDate(article)).toEqual(webPublicationDate);
    expect(articleService.getWebPublicationDate()).toEqual(undefined);
  });

  it('should check if areArticlesEqual()', () => {
    const id1 = 'id1';
    const id2 = 'id2';
    const article1 = getArticleMock({
      id: id1
    });
    const article1Clone = getArticleMock({
      id: id1
    });
    const article2 = getArticleMock({
      id: id2
    });
    expect(articleService.isEqual(article1, article1Clone)).toEqual(true);
    expect(articleService.isEqual(article1, article2)).toEqual(false);
  });
});

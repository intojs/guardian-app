import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs/index';
import { catchError } from 'rxjs/internal/operators';
import { ValidationError } from 'joi';

import { environment } from '../../../environments/environment';
import { getArticleResponseMock } from '../../domain/article-response/ArticleResponse.mock';
import { ArticleService } from './article.service';
import { ArticleResponse } from '../../domain/article-response/ArticleResponse';
import { getArticlePayloadMock } from '../../domain/article-payload/ArticlePayload.mock';

describe('article.service', () => {
  const url = `https://content.guardianapis.com/search?show-fields=body,thumbnail,byline&api-key=${environment.apiKey}`;
  let articleService;
  let httpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ArticleService
      ]
    });
    articleService = TestBed.get(ArticleService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should getArticleData', () => {
    articleService
      .getArticleData()
      .subscribe();

    httpMock.match({
      url,
      method: 'GET'
    });
  });

  describe('createArticleResponse', () => {
    it('should createArticleResponse', (done) => {
      const articleResponse = getArticleResponseMock();
      const articlePayload = getArticlePayloadMock({
        response: articleResponse
      });
      articleService
        .createArticleResponse(of(articlePayload))
        .subscribe((response: ArticleResponse) => {
          expect(response).toEqual(articleResponse);
          done();
        });
    });

    it('should handle error when the payload returned from the server is null', (done) => {
      articleService
        .createArticleResponse(of(null))
        .pipe(
          catchError((error: Error) => {
            expect(error.name).toEqual('ValidationError');
            done();
            return of(error);
          })
        )
        .subscribe();
    });

    it('should handle error when the payload returned from the server is corrupt', (done) => {
      articleService
        .createArticleResponse(of({}))
        .pipe(
          catchError((error: Error) => {
            expect(error.name).toEqual('ValidationError');
            done();
            return of(error);
          })
        )
        .subscribe();
    });
  });

  it('should getArticles', (done) => {
    const response = getArticleResponseMock();
    const articlePayload = getArticlePayloadMock({
      response
    });
    articleService
      .getArticles()
      .subscribe((res: ArticleResponse) => {
        expect(res).toEqual(response);
        done();
      });

    httpMock
      .expectOne(url)
      .flush(articlePayload);
  });

  afterEach(() => {
    httpMock.verify();
  });
});

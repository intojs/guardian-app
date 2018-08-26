import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

import { environment } from '../../../environments/environment';
import { ArticleResponse } from '../../domain/article-response/ArticleResponse';
import * as articleResponseService from '../../domain/article-response/ArticleResponse.service';

@Injectable()
export class ArticleService {
  url = `https://content.guardianapis.com/search?show-fields=body,thumbnail,byline&api-key=${environment.apiKey}`;

  constructor(private httpClient: HttpClient) {
  }

  getArticleData(): Observable<Object> {
    return this.httpClient
      .get(this.url);
  }

  createArticleResponse(articlePayload: Observable<Object>): Observable<ArticleResponse> {
    return articlePayload
      .pipe(
        map((payload: any) => {
          const result = articleResponseService.createResponse(payload);
          if (result.isError()) {
            throw result.getError();
          }
          return result.getValue();
        })
      );
  }

  getArticles(): Observable<ArticleResponse> {
    return this.getArticleData()
      .pipe(this.createArticleResponse);
  }
}

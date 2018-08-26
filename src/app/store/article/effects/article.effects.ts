import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/internal/operators';
import { of } from 'rxjs/index';

import { ArticleService } from '../../../app-services/article/article.service';
import { ArticleResponse } from '../../../domain/article-response/ArticleResponse';
import { ArticleActionTypes } from '../actions/ArticleActionTypes';
import * as articleActions from '../actions/article.actions';

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService) {
  }

  @Effect() getArticles$ =
    this.actions$
      .pipe(
        ofType(ArticleActionTypes.GET_ARTICLES),
        switchMap(() =>
          this.articleService
            .getArticles()
            .pipe(
              map(
                (articleResponse: ArticleResponse) =>
                  new articleActions
                    .GetArticlesSuccess(articleResponse)
              ),
              catchError((error: Error) => of(new articleActions.GetArticlesError(error)))
            )
        )
      );
}

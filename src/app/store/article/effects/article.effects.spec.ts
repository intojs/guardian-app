import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';

import { getArticleResponseMock } from '../../../domain/article-response/ArticleResponse.mock';
import { ArticleEffects } from './article.effects';
import { ArticleService } from '../../../app-services/article/article.service';
import { ArticleActionTypes } from '../actions/ArticleActionTypes';
import * as articleActions from '../actions/article.actions';

describe('article.effects', () => {
  let articleService: ArticleService;
  let articleEffects: ArticleEffects;
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ArticleService,
        ArticleEffects,
        provideMockActions(() => actions)
      ],
    });
    articleService = TestBed.get(ArticleService);
    articleEffects = TestBed.get(ArticleEffects);
  });

  it(`should dispatch ${ArticleActionTypes.GET_ARTICLES_SUCCESS}`, () => {
    const articleResponse = getArticleResponseMock();

    spyOn(articleService, 'getArticles').and.returnValue(of(articleResponse));

    const action = new articleActions.GetArticles();
    const expectedAction = new articleActions.GetArticlesSuccess(articleResponse);

    actions = cold('--a-', {a: action});
    const expected = cold('--b-', {b: expectedAction});

    expect(articleEffects.getArticles$).toBeObservable(expected);
  });

  it(`should dispatch ${ArticleActionTypes.GET_ARTICLES_ERROR}`, () => {
    const error = Error('something bad happened');

    spyOn(articleService, 'getArticles').and.returnValue(throwError(error));

    const action = new articleActions.GetArticles();
    const expectedAction = new articleActions.GetArticlesError(error);

    actions = cold('--a-', {a: action});
    const expected = cold('--b-', {b: expectedAction});

    expect(articleEffects.getArticles$).toBeObservable(expected);
  });
});

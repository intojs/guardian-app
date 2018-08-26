import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsConfig, StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { AppState } from './AppState';
import { ArticleEffects } from './article/effects/article.effects';
import * as articleReducer from './article/reducer/article.reducer';
import * as articleStatusReducer from './article-status/reducer/article-status.reducer';
import * as articleMetasReducer from './article-metas/reducer/article-metas.reducer';
import * as selectedArticleReducer from './selected-article/reducer/selected-article.reducer';

export const reducers: ActionReducerMap<AppState> = {
  articleStatus: articleStatusReducer.reducer,
  articleMetas: articleMetasReducer.reducer,
  articles: articleReducer.reducer,
  selectedArticle: selectedArticleReducer.reducer
};

@NgModule({
  imports: [
    EffectsModule.forRoot([
      ArticleEffects
    ]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ]
})
export class AppStore {
}

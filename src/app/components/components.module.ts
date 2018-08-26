import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgProgressModule } from '@ngx-progressbar/core';

import { PipesModule } from '../pipes/pipes.module';
import { AppComponent } from './app.component';
import { ArticleContainer } from './article/article.container';
import { ArticleComponent } from './article/article.component';
import { ArticleListContainer } from './article-list/article-list.container';
import { ArticleListComponent } from './article-list/article-list.component';
import { ErrorContainer } from './error.container';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    NgProgressModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    ErrorContainer,
    ArticleContainer,
    ArticleComponent,
    ArticleListContainer,
    ArticleListComponent
  ]
})
export class ComponentsModule {
}


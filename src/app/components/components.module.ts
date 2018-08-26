import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';
import { AppComponent } from './app.component';
import { ArticleContainer } from './article/article.container';
import { ArticleComponent } from './article/article.component';
import { ArticleListContainer } from './article-list/article-list.container';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    AppComponent,
    ArticleContainer,
    ArticleComponent,
    ArticleListContainer,
    ArticleListComponent
  ]
})
export class ComponentsModule {
}


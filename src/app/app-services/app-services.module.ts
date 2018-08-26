import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ArticleService } from './article/article.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ArticleService
  ]
})
export class AppServicesModule {
}

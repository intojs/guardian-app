import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ThumbnailPipe } from './article/thumbnail.pipe';
import { WebTitlePipe } from './article/web-title.pipe';
import { BylinePipe } from './article/byline.pipe';
import { ArticleBodyPipe } from './article/article-body.pipe';
import { WebPublicationDatePipe } from './article/web-publication-date/web-publication-date.pipe';

@NgModule({
  declarations: [
    ThumbnailPipe,
    WebTitlePipe,
    BylinePipe,
    ArticleBodyPipe,
    WebPublicationDatePipe
  ],
  exports: [
    ThumbnailPipe,
    WebTitlePipe,
    BylinePipe,
    ArticleBodyPipe,
    WebPublicationDatePipe
  ],
  providers: [DatePipe]
})
export class PipesModule {
}


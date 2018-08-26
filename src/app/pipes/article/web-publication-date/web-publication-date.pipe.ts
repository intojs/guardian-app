import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Article } from '../../../domain/article/Article';
import * as articleService from '../../../domain/article/Article.service';

@Pipe({
  name: 'webPublicationDate',
  pure: true
})
export class WebPublicationDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {
  }

  transform(article?: Article) {
    const publicationDate = articleService.getWebPublicationDate(article);
    return publicationDate ?
      this.datePipe.transform(publicationDate) :
      '...';
  }
}


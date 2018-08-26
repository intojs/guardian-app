import { Pipe, PipeTransform } from '@angular/core';

import { Article } from '../../domain/article/Article';
import * as articleService from '../../domain/article/Article.service';

@Pipe({
  name: 'webTitle',
  pure: true
})
export class WebTitlePipe implements PipeTransform {
  transform(article?: Article) {
    return articleService.getWebTitle(article);
  }
}


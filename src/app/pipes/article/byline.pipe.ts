import { Pipe, PipeTransform } from '@angular/core';

import { Article } from '../../domain/article/Article';
import * as articleService from '../../domain/article/Article.service';

@Pipe({
  name: 'byline',
  pure: true
})
export class BylinePipe implements PipeTransform {
  transform(article?: Article) {
    return articleService.getByline(article);
  }
}


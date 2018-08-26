import { Pipe, PipeTransform } from '@angular/core';

import { Article } from '../../domain/article/Article';
import * as articleService from '../../domain/article/Article.service';

@Pipe({
  name: 'thumbnail',
  pure: true
})
export class ThumbnailPipe implements PipeTransform {
  transform(article?: Article) {
    return articleService.getThumbnail(article);
  }
}

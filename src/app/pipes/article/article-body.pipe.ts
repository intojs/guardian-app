import { Pipe, PipeTransform } from '@angular/core';

import { Article } from '../../domain/article/Article';
import * as articleService from '../../domain/article/Article.service';

@Pipe({
  name: 'articleBody',
  pure: true
})
export class ArticleBodyPipe implements PipeTransform {
  transform(article?: Article) {
    return articleService.getBody(article);
  }
}



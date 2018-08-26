import { EntityState } from '@ngrx/entity';

import { Article } from '../../../domain/article/Article';

export interface ArticleState extends EntityState<Article> {
}

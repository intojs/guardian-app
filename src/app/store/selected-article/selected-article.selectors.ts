import { createFeatureSelector } from '@ngrx/store';

import { Article } from '../../domain/article/Article';

export const getSelectedArticle = createFeatureSelector<Article>('selectedArticle');

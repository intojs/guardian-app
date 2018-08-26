import { ArticleStatus } from './article-status/state/ArticleStatus';
import { ArticleMetas } from './article-metas/state/ArticleMetas';
import { ArticleState } from './article/state/ArticleState';
import { Article } from '../domain/article/Article';

export interface AppState {
  readonly articleStatus: ArticleStatus;
  readonly articleMetas?: ArticleMetas;
  readonly articles: ArticleState;
  readonly selectedArticle?: Article;
}

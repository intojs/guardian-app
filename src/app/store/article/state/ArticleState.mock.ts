import { ArticleState } from './ArticleState';

const getDefaults = (): ArticleState => ({
  ids: [],
  entities: {}
});

export const getArticleStateMock = (p?: Partial<ArticleState>): ArticleState =>
  Object.assign(getDefaults(), p);


import { ArticleStatus } from './ArticleStatus';

const getDefaults = (): ArticleStatus => ({
  loading: false
});

export const getArticleStatusMock = (p?: Partial<ArticleStatus>): ArticleStatus =>
  Object.assign(getDefaults(), p);



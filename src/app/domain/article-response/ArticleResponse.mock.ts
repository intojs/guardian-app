import { ArticleResponse } from './ArticleResponse';
import { getArticleMock } from '../article/Article.mock';

const getDefaults = (): ArticleResponse => ({
  status: 'ok',
  userTier: 'developer',
  total: 2055762,
  startIndex: 1,
  pageSize: 10,
  currentPage: 1,
  pages: 205577,
  orderBy: 'newest',
  results: [getArticleMock()]
});

export const getArticleResponseMock = (p?: Partial<ArticleResponse>): ArticleResponse =>
  Object.assign(getDefaults(), p);



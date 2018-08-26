import { ArticleMetas } from './ArticleMetas';

const getDefaults = (): ArticleMetas => ({
  startIndex: 1,
  pageSize: 10,
  currentPage: 1,
  pages: 205577,
  orderBy: 'newest',
});

export const getArticleMetasMock = (p?: Partial<ArticleMetas>): ArticleMetas =>
  Object.assign(getDefaults(), p);


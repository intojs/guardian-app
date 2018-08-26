import { head, path } from 'ramda';

import { Article } from './Article';

export const findFirstArticle = (articles: Article[]): Article | undefined =>
  head<Article>(articles);

export const getThumbnail = (article?: Article): string | undefined =>
  path<string>(['fields', 'thumbnail'], article);

export const getWebTitle = (article?: Article): string =>
  article && article.webTitle ? article.webTitle : '...';

export const getByline = (article?: Article): string => path<string>(['fields', 'byline'], article) || '...';

export const getBody = (article?: Article): string => path<string>(['fields', 'body'], article) || '...';

export const getWebPublicationDate = (article?: Article): string | undefined =>
  article && article.webPublicationDate ? article.webPublicationDate : undefined;

export const isEqual = (articleOne?: Article, articleTwo?: Article): boolean =>
  !!(articleOne && articleTwo && articleOne.id === articleTwo.id);

export const articlesExist = (articles: Article[]) => !!(articles && articles.length > 0);

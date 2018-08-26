import { Article } from './Article';
import { getArticleFieldsMock } from '../article-fields/ArticleFields.mock';

const getDefaults = (): Article => ({
  id: 'sport/live/2018/aug/21/england-chasing-record-521-to-win-third-test-again-india-day-four-live',
  type: 'liveblog',
  sectionId: 'sport',
  sectionName: 'Sport',
  webPublicationDate: '2018-08-21T11:37:48Z',
  webTitle: 'England four down chasing 521 to win third Test against India: day four –&nbsp;live!',
  webUrl: 'https://www.theguardian.com',
  apiUrl: 'https: //content.guardianapis.com',
  fields: getArticleFieldsMock(),
  isHosted: false,
  pillarId: 'pillar/sport',
  pillarName: 'Sport'
});

export const getArticleMock = (p?: Partial<Article>): Article =>
  Object.assign(getDefaults(), p);

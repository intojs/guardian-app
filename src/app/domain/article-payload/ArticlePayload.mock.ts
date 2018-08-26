import { ArticlePayload } from './ArticlePayload';
import { getArticleMock } from '../article/Article.mock';
import { getArticleResponseMock } from '../article-response/ArticleResponse.mock';

const getDefaults = (): ArticlePayload => ({
  response: getArticleResponseMock()
});

export const getArticlePayloadMock = (p?: Partial<ArticlePayload>): ArticlePayload =>
  Object.assign(getDefaults(), p);




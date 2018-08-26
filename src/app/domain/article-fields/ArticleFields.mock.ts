import { ArticleFields } from './ArticleFields';

const getDefaults = (): ArticleFields => ({
  body: 'I am a fancy article',
  thumbnail: 'https://media.guim.co.uk/500.jpg',
  byline: 'Daniel Dughila'
});

export const getArticleFieldsMock = (p?: Partial<ArticleFields>): ArticleFields =>
  Object.assign(getDefaults(), p);


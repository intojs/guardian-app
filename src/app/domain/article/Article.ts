import { ArticleFields } from '../article-fields/ArticleFields';

export interface Article {
  readonly id: string;
  readonly type: string;
  readonly sectionId: string;
  readonly sectionName: string;
  readonly webPublicationDate: string;
  readonly webTitle: string;
  readonly webUrl: string;
  readonly apiUrl: string;
  readonly fields: ArticleFields;
  readonly isHosted: boolean;
  readonly pillarId: string;
  readonly pillarName: string;
}

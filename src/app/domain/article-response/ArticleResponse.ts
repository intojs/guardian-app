import { Article } from '../article/Article';

export interface ArticleResponse {
  readonly status: string;
  readonly userTier: string;
  readonly total: number;
  readonly startIndex: number;
  readonly pageSize: number;
  readonly currentPage: number;
  readonly pages: number;
  readonly orderBy: string;
  readonly results: Article[];
}

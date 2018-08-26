import { ValidationError } from 'joi';
import * as joi from 'joi';

import { ArticleResponse } from './ArticleResponse';
import { Result } from '../Result';
import { Article } from '../article/Article';
import { ArticleMetas } from '../../store/article-metas/state/ArticleMetas';

const schema = {
  response: {
    status: joi.string().required(),
    userTier: joi.string().required(),
    total: joi.number().required(),
    startIndex: joi.number().required(),
    pageSize: joi.number().required(),
    currentPage: joi.number().required(),
    pages: joi.number().required(),
    orderBy: joi.string().required(),
    results: joi.array().required()
  }
};

export const createResponse = (payload?: any): Result<ArticleResponse, ValidationError> => {
  const {error} = joi.validate(
    payload,
    schema,
    {presence: 'required'}
  );
  return error ?
    Result.error(error) :
    Result.ok(payload.response);
};

export const getResults = (response: ArticleResponse): Article[] =>
  response &&
  response.results ?
    response.results :
    [];

export const getArticleMetas = (response: ArticleResponse): ArticleMetas => {
  const {startIndex, pageSize, currentPage, pages, orderBy} = response;
  return {
    startIndex,
    pageSize,
    currentPage,
    pages,
    orderBy
  };
};

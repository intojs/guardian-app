import { PipeTransform } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { WebPublicationDatePipe } from './web-publication-date.pipe';
import { getArticleMock } from '../../../domain/article/Article.mock';

describe('web-publication-date.pipe', () => {
  let pipe: PipeTransform;
  let datePipe: DatePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
      ],
      providers: [DatePipe, WebPublicationDatePipe]
    });
    datePipe = TestBed.get(DatePipe);
    pipe = TestBed.get(WebPublicationDatePipe);
  });

  it('should transform data', () => {
    const formattedDate = '23 January';
    spyOn(datePipe, 'transform').and.returnValue('23 January');
    const article = getArticleMock({
      webPublicationDate: '2018-08-21T11:37:48Z'
    });
    expect(pipe.transform(article)).toEqual(formattedDate);
  });

  it('should transform data when the webPublicationDate is an empty string', () => {
    const article = getArticleMock({
      webPublicationDate: ''
    });
    expect(pipe.transform(article)).toEqual('...');
  });
});

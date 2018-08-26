import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output,
  SimpleChanges
} from '@angular/core';

import { Article } from '../../domain/article/Article';
import * as articleService from '../../domain/article/Article.service';

@Component({
  selector: 'app-article-list',
  template: `
    <div class="list-group">
      <button
        type="button"
        class="list-group-item list-group-item-action"
        *ngFor="let article of articles; trackBy: trackArticlesBy"
        [ngClass]="{active: isActive(article, selectedArticle)}"
        (click)="onButtonClick(article)"
        [innerHtml]="article | webTitle"
      >
      </button>
    </div>
    <div
      class="list-group"
      *ngIf="!articles || articles?.length === 0"
    >
      <button
        type="button"
        class="list-group-item list-group-item-action"
        *ngFor="let placeholder of placeholders; trackPlaceholdersBy"
      >
        {{placeholder}}
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    button {
      cursor: pointer;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleListComponent {
  @Input() articles?: Article[];
  @Input() selectedArticle?: Article;
  @Output() selectArticle: EventEmitter<Article> = new EventEmitter();
  placeholders: string[];

  constructor() {
    this.placeholders = this.generatePlaceholders();
  }

  generatePlaceholders(placeholders: string[] = [], nr = 0) {
    if (nr < 10) {
      placeholders.push('...');
      return this.generatePlaceholders(placeholders, nr += 1);
    }
    return placeholders;
  }

  trackArticlesBy(index, article: Article): string {
    return article.id;
  }

  trackPlaceholdersBy(index): number {
    return index;
  }

  isActive(current?: Article, selected?: Article): boolean {
    return articleService.isEqual(current, selected);
  }

  onButtonClick(article: Article) {
    this.selectArticle.emit(article);
  }
}


import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Article } from '../../domain/article/Article';

@Component({
  selector: 'app-article',
  template: `
    <div class="card">
      <img
        *ngIf="article | thumbnail; else placeholder"
        [src]="article | thumbnail"
        [alt]="article | webTitle"
        class="card-img-top"
      >
      <ng-template #placeholder>
        <div class="img-placeholder"></div>
      </ng-template>
      <div class="card-body">
        <h5 class="card-title">{{article | webTitle}}</h5>
        <div class="card-details mb-4">
          <div class="card-details__by-line">
            <h6 class="card-subtitle text-muted">By: {{article | byline}}</h6>
          </div>
          <div class="card-details__date">
            <h6 class="card-subtitle text-muted">{{article | webPublicationDate}}</h6>
          </div>
        </div>
        <div class="card-text" [innerHTML]="article | articleBody"></div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    :host ::ng-deep img {
      width: 100%;
      height: auto;
    }

    .img-placeholder {
      height: 200px;
      border-top-left-radius: calc(0.25rem - 1px);
      border-top-right-radius: calc(0.25rem - 1px);
      background: #F8F9FA url('assets/placeholder.svg') no-repeat center center;
    }

    .card-details {
      display: flex;
      flex-direction: column;
    }

    .card-details__by-line,
    .card-details__date {
      padding: 5px 0;
    }

    .card-subtitle {
      margin: 0;
    }

    @media (min-width: 768px) {
      .card-details {
        flex-direction: row;
      }

      .card-details__by-line,
      .card-details__date {
        flex-basis: 40%;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent {
  @Input() article?: Article;
}

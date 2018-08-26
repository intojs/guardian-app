import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';

import { AppState } from '../store/AppState';
import * as articleStatusSelectors from '../store/article-status/article-status.selectors';

@Component({
  selector: 'app-error-container',
  template: `
    <div
      class="alert alert-warning"
      role="alert"
      *ngIf="error$ | async"
    >
      Could not retrieve the articles. Please try again later!
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ErrorContainer implements OnInit {
  error$: Observable<Error | undefined>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.error$ = this.store
      .pipe(
        select(articleStatusSelectors.selectError)
      );
  }
}


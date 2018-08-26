import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-progress></ng-progress>
    <app-nav class="mb-3"></app-nav>
    <app-error-container></app-error-container>
    <main class="container">
      <div class="row">
        <article class="col-lg-8 mb-3">
          <app-article-container></app-article-container>
        </article>
        <aside class="col-lg-4 mb-3">
          <app-article-list-container></app-article-list-container>
        </aside>
      </div>
    </main>
  `,
})
export class AppComponent {
}

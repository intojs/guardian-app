import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-light bg-light">
      <div class="navbar-brand">
        Guardian Highlights
      </div>
    </nav>
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-8 mb-3">
          <app-article-container></app-article-container>
        </div>
        <div class="col-lg-4 mb-3">
          <app-article-list-container></app-article-list-container>
        </div>
      </div>
    </div>
  `,
})
export class AppComponent {
}

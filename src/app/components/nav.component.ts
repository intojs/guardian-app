import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar navbar-light bg-light">
      <div class="navbar-brand">
        Guardian Highlights
      </div>
    </nav>
  `,
  styles: [`
    :host {
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
}

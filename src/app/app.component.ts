import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective, NumericDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  providers: [
    { provide: APP_SETTINGS, useVAlue: appSettings }
  ]
})
export class AppComponent {
  title = 'ch032026';
  settings = inject(APP_SETTINGS);

  private setTitle = () => {
    this.title = this.settings.title;
  }

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000)
  }

  constructor() {
    // this.changeTitle(this.setTitle); // using callbacks
    this.onComplete().then(this.setTitle); // using Promises is a better way
  }

  private onComplete() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
}

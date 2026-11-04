import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { APP_SETTINGS, appSettings } from './app.settings';
import { Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger/key-logger.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective, NumericDirective, KeyLoggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings }
  ]
})
export class AppComponent {
  title = 'ch032026';
  settings = inject(APP_SETTINGS);

  private setTitle = () => {
    const timeStamp = new Date();
    this.title = `${this.settings.title} (${timeStamp})`;
  }

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000)
  }

  constructor() {
    // this.changeTitle(this.setTitle); // using callbacks
    // this.onComplete().then(this.setTitle); // using Promises is a better way
    this.title$.subscribe(this.setTitle); // using Observables
  }

  private onComplete() {
    return new Promise<void>(resolve => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next(this.setTitle);
    }, 2000);
  });
}


import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { fromEvent, tap, map, filter } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  imports: [],
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css'
})
export class KeyLoggerComponent implements OnInit {
  input = viewChild<ElementRef>('keyContainer');
  keys = '';
  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input()!.nativeElement, 'keyup');
    logger$.pipe(
      map(evt => evt.key.charCodeAt(0)),
      filter(code => (code > 31 && (code < 48 || code > 57)) === false),
      tap(digit => this.keys += String.fromCharCode(digit))
    ).subscribe();
  }
}

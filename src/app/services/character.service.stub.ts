import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { cold } from 'jasmine-marbles';

@Injectable()
export class CharactersServiceStub {
  constructor() { }

  getAll(): Observable<any> {
    const characters$ = cold('--x|', { x: { results: [{ name: 'pikachu' }] } });
    return characters$;
  }
}

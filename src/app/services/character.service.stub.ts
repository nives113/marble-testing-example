import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CharactersServiceStub {
  constructor() { }

  getAll(): Observable<any> {
    return of({ results: [{ name: 'pikachu' }] });
  }
}

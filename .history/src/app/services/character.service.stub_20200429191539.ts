import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

export class CharactersServiceStub {
  constructor() { }

  getAll(): Observable<any> {
    return of({ name: 'pikachu' });
  }
}

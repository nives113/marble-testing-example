import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor() { }

  getAll(): Observable<any> {
    return ajax.getJSON(`https://swapi.co/api/people`);
  }
}

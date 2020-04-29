import { Observable, of } from 'rxjs';

export class CharactersServiceStub {
  constructor() { }

  getAll(): Observable<any> {
    return of({ name: 'Random' });
  }
}

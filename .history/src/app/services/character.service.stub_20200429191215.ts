import { Observable, of } from 'rxjs';

@Injectable()
export class CharactersServiceStub {
  constructor() { }

  getAll(): Observable<any> {
    return of({ name: 'pikachu' });
  }
}

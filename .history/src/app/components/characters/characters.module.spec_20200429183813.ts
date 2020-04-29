import { CharactersModule } from './characters.module';

describe('CharactersModule', () => {
  let todosModule: CharactersModule;

  beforeEach(() => {
    todosModule = new CharactersModule();
  });

  it('should create an instance', () => {
    expect(todosModule).toBeTruthy();
  });
});

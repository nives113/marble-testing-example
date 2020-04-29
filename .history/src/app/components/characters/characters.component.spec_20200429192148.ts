import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { By } from '@angular/platform-browser';
import { CharactersService } from 'src/app/services/characters.service';
import { CharactersServiceStub } from 'src/app/services/character.service.stub';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      providers: [{
        provide: CharactersService,
        useClass: CharactersServiceStub,
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list all characters', () => {
    console.log((component as any).characterService);
    fixture.detectChanges();
    debugger;
    expect(fixture.debugElement.queryAll(By.css('div.character')).length).toBeGreaterThan(0);
  });
});

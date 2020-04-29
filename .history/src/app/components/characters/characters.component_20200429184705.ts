import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  template: `
    <div *ngFor="let character of characters">
      {{ character.name }}
    </div>
  `,
})
export class CharactersComponent implements OnInit {
  public characters = [];

  constructor(private characterService: CharactersService) { }

  public ngOnInit() {
    this.characterService.getAll().subscribe((todos) => {
      this.characters = this.characters;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  template: `
    <div *ngFor="let character of characters" class="character">
      {{ character.name }}
    </div>
    <div *ngIf="loading" class="loading">Loading...</div>
  `,
})
export class CharactersComponent implements OnInit {
  public characters = [];
  public loading = false;

  constructor(private characterService: CharactersService) { }

  public ngOnInit() {
    this.loading = true;

    this.characterService.getAll().subscribe((characters) => {
      this.loading = false;
      this.characters = characters.results;
    });
  }
}

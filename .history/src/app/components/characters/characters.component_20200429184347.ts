import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  template: `
    <div *ngFor="let character of characters">
      {{ cahracter.name }}
    </div>
  `,
})
export class CharactersComponent implements OnInit {
  todos = [];

  constructor(private todosService: CharactersService) { }

  public ngOnInit() {
    this.todosService.get().subscribe((todos) => {
      this.todos = todos;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-todos',
  template: `
    <div *ngFor="let todo of todos" class=todo">
      {{ todo.id }}
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

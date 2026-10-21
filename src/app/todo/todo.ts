import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-todo',
  styleUrl: './todo.css',
  templateUrl: './todo.html',
})
export class Todo {


items = signal<string[]>([]);

addTodo(item: string) {

  this.items.update((items) => [...items, item]);
}

deleteTodo(index: number) {
  this.items.update((items) => items.filter((_, i) => i !== index));
}

}
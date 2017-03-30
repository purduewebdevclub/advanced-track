import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  private todos = [
    {
      name: "Do the laundry",
      done: false
    },
    {
      name: "Study for stats",
      done: false
    },
    {
      name: "Finish App",
      done: false
    }
  ]
  addTodo(newTodo) {
    let obj = { name: newTodo, done: false };
    this.todos.push(obj);
  }
  getTodos() {
    return this.todos;
  }
  constructor() { }

}

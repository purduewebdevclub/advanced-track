import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todos';
import { TodoListService } from '../todo-list.service';

import 'rxjs/add/operator/take';
import { Observable } from 'rxjs/Observable';
export interface AppState {
  todos: Todo[]
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todos: Observable<Todo[]>

  constructor(private todoListService: TodoListService, private store: Store<AppState>) { 
    this.todos = this.store.select(state => state.todos);
    this.todoListService.getTodos().take(1).subscribe((todos) => { /* Subscribe starts observable */
      this.store.dispatch({ type:  "UPDATE_TODOS", payload: todos});
    });
  }

  addTodo(newTodo) { //newTodo is whatever is being emitted by add-todo component
    let newItem = {
      name: newTodo,
      done: false
    }
    this.store.dispatch({ type: "ADD_TODO", payload: {name: newTodo, done: false} })
  }

  ngOnInit() {
  }

}

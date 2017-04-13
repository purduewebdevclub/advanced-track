import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../todo-list.service';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[]; 
  constructor(private todoListService: TodoListService) { 
    this.todoListService.getTodos().subscribe((todos) => { /* Subscribe starts observable */
      this.todos = todos;
    });
  }

  addTodo(newTodo) { //newTodo is whatever is being emitted by add-todo component
    this.todos.push({name: newTodo, id: this.todos.length, done: false});
  }

  ngOnInit() {
  }

}

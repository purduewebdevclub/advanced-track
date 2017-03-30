import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[]; 
  constructor(private todoListService: TodoListService) { 
    this.todos = this.todoListService.getTodos();
  }

  addTodo(newTodo) { //newTodo is whatever is being emitted by add-todo component
    this.todoListService.addTodo(newTodo);
  }

  ngOnInit() {
  }

}

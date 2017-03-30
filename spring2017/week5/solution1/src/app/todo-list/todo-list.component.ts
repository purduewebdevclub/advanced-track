import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  newTodo: string;
  todos = [
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
  constructor() { }

  addTodo() {
    let obj = {name: this.newTodo, done: false};
    this.todos.push(obj);
  }

  ngOnInit() {
  }

}

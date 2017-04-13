import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addItem = new EventEmitter<any>();
  newTodo: string;
  constructor() { }
  addTodo() {
    this.addItem.emit(this.newTodo);
  }
  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { TodoItem } from './todo-item';
@Component({
    selector:'app-todo',
    templateUrl: './todo.component.html'
})
export class TodoComponent {
    todoName: string;
    todos: TodoItem[];
    constructor(){
        this.todos = [];
    }
    addTodo() {
        //Mutation way: this.todos.push({name: this.todoName, id: this.todos.length});
        this.todos = [
            ...this.todos,
            {name: this.todoName, id: this.todos.length}
        ]; //the array returns a new version of this.todos without changing the underlying reference to this.todos
    }
}
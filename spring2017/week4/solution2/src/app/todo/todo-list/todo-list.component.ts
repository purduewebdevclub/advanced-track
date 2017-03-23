import { Component } from '@angular/core';
@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
    todoName: string;
    todos: any[];
    constructor(){
        this.todos = [];
    }
    addTodo() {
        //Mutation way: this.todos.push({name: this.todoName, id: this.todos.length});
        this.todos = [
            ...this.todos,
            {name: this.todoName, id: this.todos.length}
        ]; //the array returns a new version of this.todos without changing the underlying reference to this.todos
        console.log(this.todos);
    }
}
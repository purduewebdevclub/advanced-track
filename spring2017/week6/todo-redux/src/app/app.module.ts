import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { todoReducer } from './reducers/todo-reducer';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './todo-list.service';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ todos: todoReducer })
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

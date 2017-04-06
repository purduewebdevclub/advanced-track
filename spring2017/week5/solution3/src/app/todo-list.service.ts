import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TodoListService {
  constructor(private http: Http) { }
  getTodos() {
    return this.http.get('assets/todos.json').map(response => response.json()); //HTTP request
  }
}

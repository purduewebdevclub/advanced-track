import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
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

}

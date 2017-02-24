# Tutorial
We will talk about many things.
* Components in other Components
* Two-Way Binding
* Click Events

## Components in other Components
Say I have two components, `AppComponent` and `TodoComponent`.
If I wanted to put `TodoComponent` inside `AppComponent`, I can
```html
    <app-root>
        <app-todo></app-todo> <!--Assuming this is the right selector-->
    </app-todo>
```

## Two-Way Binding
* This is called NgModel
* Instead of just R, it's R/W
* First, NgModel looks up current value of var. Then, if the input changes,
the variable in the class gets updated as well.

Try adding
```typescript
    /* app.module.ts */
    ...
    imports: [
        BrowserModule,
        FormsModule //add import from @angular/forms
    ]
    ...
    /* todo.component.ts */
    ...
    export class TodoComponent {
        todo: {}
        ...
    }
```
```html
    <!--Inside todo.component.html-->
    <div> Current Todo: {{todo.name}} </div>
    <input [(ngModel)]="todo.name">
```
So, in this case, todo.name gets updated automatically each time
the user types in the input box.

### Why is this useful?
If you don't want to manually read from your input and always want up-to-date values.

### Click Events
These are pretty easy. 

You need to understand one thing -- each variable referenced in the template
traces back to the typescript. So, if you use a method in the template, you're going to 
have to have that method in the typescript as well.

So, we want to console.log the value of the todo when a button is clicked on.
1. Add a button
2. Add the attribute `(click)` to the button
3. Set it equal to `log()`
4. Create the log method inside the typescript and do a `console.log` of `todo`

```html
    <button (click)="log()">console.log</button>
```
```typescript
    ...
    constructor(){}
    ...
    ...
    log() {
        console.log(todo);
    }
    ...
```
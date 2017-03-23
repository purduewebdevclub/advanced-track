import { Component, Input } from '@angular/core';
@Component({
    selector:'todo-item',
    templateUrl: './todo-item.component.html'
})
export class TodoItemComponent {
    @Input() item: any;
}
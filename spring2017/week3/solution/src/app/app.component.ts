import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title: string;
    constructor() {
        this.title = "Hello World";
    }
}

import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent { //just a regular class for component
    title: string;
    constructor() { //different from a regular constructor
        this.title = "Intro App!";
    }
}
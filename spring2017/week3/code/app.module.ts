import { NgModule } from '@angular/core'; //don't mind the errors
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
@NgModule({
    declarations: [ //list of all components
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [
        AppComponent //AppComponent is the root component, so it gets bootstrapped
    ]
})
export class AppModule{ }
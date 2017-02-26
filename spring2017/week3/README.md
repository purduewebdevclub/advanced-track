# More Angular 2 Components
We talked briefly about Angular 2. There are many important aspects of an A2 app.

1. Bootstrapping (making sure the bootstrapper receives root module)
2. Declaring all components in NgModule
3. Setting bootstrap of component in root NgModule
4. Create app-root component
```typescript
    @Component({
        selector: 'app-root', //name of component
        templateUrl: './app.component.html' //html to add to component
    })
    export class AppComponent {
        title: string;
        constructor() {
            this.title="Hello World"; //sets property of title to Hello World
        }
    }
```
## Notes about Components
1. There always needs to be a root component
2. They're reusuable
3. They help separate large parts of your app


## Note: Please write all solutions in your own separate folder with webpack in it!
### Look at `components-intro.md` for the first tutorial.
### Look at `tutorial.md` for the second tutorial.
### Look at `challenge.md` for the challenge.

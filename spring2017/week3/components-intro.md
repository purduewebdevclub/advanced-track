# Components Intro
Components are arguably the most important part of Angular 2. They allow you to separate parts
of your application. And, they let you reuse HTML!

## How they work
1. Angular finds the root component from the root module
2. Angular bootstraps the root component and adds to the page
3. Angular looks at the class's metadata defined in the `@Component` and looks at the template required
4. Angular initializes the "model" for the component

## What's a model?
Angular is called an MVC framework. M is for Model, V is for View, C is for Controller.

The Model is the collection of properties assigned to each component. This is also referred to as scope.
The model is what the template is able to access. 

The View is basically your template. 

The controller is what is used to initialize the view. As in, your `AppComponent` class. Based on the initial
values in the AppComponent, the model is given an instance with those properties and other Angular-related ones.

Let's see an example:

```typescript
@Component({
    ...
})
export class TestComponent {
    title="Test Title!";
    constructor(){}
}
```
So, we created a component called `TestComponent`, and it has a property of title with a value of "Test Title".
This means if you want to show the title, you are able to like this (given this is set as your template):
```html
<div> {{ title }} </div>
```
## Note: Don't forget to add newly added components to the declarations array in your app.module.ts

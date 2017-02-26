# Challenge 1
So you already have a root component and root module.
1. Create a new component, TodoComponent. It should
display the name of the todo item.
2. Place this component inside the app-root component
Hint: You can add things to app.component.html
3. Create an external interface `TodoItem` and import it

    Make sure it has the id and title property!

# Challenge 2 (After going through the tutorial)
1. Create an input box in your todoitem's template/html
    
    This will be used to stand for the new TodoItem
2. Add a property of type `TodoItem[]` to the `TodoComponent`
3. Initialize that property to `[]`
4. Attach an NgModel to the input box
5. Add a button with a click event that adds the current
NgModel's value to the array. 

Hint: Convert the NgModel value to a TodoItem and then push to array

### BONUS: Add the TodoItem without mutating the original array
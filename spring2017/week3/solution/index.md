## Solution
Here lies the solution to the challenges. There may be some errors 
in the typescript, but that is due to the lack of setup within the src.

The solution may not be exactly what you'd expect, but it should be very 
similar. As in, both yours and the solution should produce the same output.

### Notes:
1. When we created our component, we needed to add the component to the declarations of our module
2. When we use NgModel, since this is not a built-in feature, you need to import it from another module,
`FormsModule`
3. You placed the todo component's selector inside app.component.html so Angular knew to load it inside app.component

Note: NgModules are different from TypeScript/Angular 2 modules. 
Angular 2 modules are independent from other types of modules. But their
function and purpose is the same -- to separate concerns from other parts of
your application.
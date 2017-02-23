var tests = {
    passed: 0,
    failed: 0,
    total: 0,
    reset: function() {
        this.passed = this.failed = this.total = 0;
    },
    printResults: function() {
        let color = tests.passed === tests.total ? "green" : "yellow";
        console.log(`%c Passed ${tests.passed} out of ${tests.total} tests`, `color: ${color}`);
    }
};
function expect(obj1) {
    return {
        toBe: function(obj2) {
            tests.total++;
            if(typeof obj2 === "object") {
                if(JSON.stringify(obj1) === JSON.stringify(obj2)) {
                    tests.passed++;
                } else {
                    tests.failed++;
                    console.error("Expected " + obj1 + " to be " + obj2);
                }
            } else {
                if (obj1 === obj2) {
                    tests.passed++;
                } else {
                    tests.failed++;
                    console.error("Expected " + obj1 + " to be " + obj2);
                }
            }
            
        }
    }
}
/*-----------------------------------------------Start--of--lexical--this--example-------------------------------------------------------*/
function ExampleClass() {
    this.exampleVar = "example";
    this.exampleFunction = function() {
        return this.exampleVar;
    }
}

var ec = new ExampleClass();
var func = ec.exampleFunction;
expect(ec.exampleFunction()).toBe("example");
expect(ec.exampleFunction()).toBe(func()); //Throws an error because func calls exampleFunction with the window as the caller
tests.printResults();
/*---------------------------------------------------------------------------------------------------------------------------------------*/

/*------------------------------------------------Start--of--let--example----------------------------------------------------------------*/
tests.reset();
function varExample() {
    var example = "HI!";
    if(1) {
        var example = "BYE!";
    }
    return example;
}
expect(varExample()).toBe("HI!"); // Fails because var example changes the previously created example
function letExample() {
    let example = "HI!";
    if(1) {
        let example = "BYE!"; // Creates block scoping
    }
    return example;
}
expect(letExample()).toBe("HI!");
tests.printResults();
/*---------------------------------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------------Start--of--const--example---------------------------------------------------------------*/
tests.reset();
const abc = "abc";
//abc = "ANOTHER"; //ERROR! Can't reassign a constant variable
/*---------------------------------------------------------------------------------------------------------------------------------------*/

/*-----------------------------------------------Start--of--arrow--example---------------------------------------------------------------*/
tests.reset();
let arr = [2,4,5,7,9,10,11];
let expected = [2, 4, 10];

let evens = arr.filter(num => num % 2 === 0); // Each item in the array is aliased to num and the return value is a boolean to determine whether it should be added
expect(evens).toBe(expected); // true

let mapped = arr.map(num => ({value: num})); // Each item is aliased to num, and the returned value is what the item should be changed to
expected = [{value: 2}, {value: 4}, {value: 5}, {value: 7}, {value: 9}, {value: 10}, {value: 11}];
expect(mapped).toBe(expected); //true

tests.printResults();
/*---------------------------------------------------------------------------------------------------------------------------------------*/
# Functions as values

In JavaScript, functions are values in their own right, like for other types — numbers, strings, etc.

```javascript
// Creating a function
const aFunction = () => {
  return 123;
}

// Functions can be referenced as values, without the brackets ()
// here we are essentially assigning the exact same function to a new name.
const anotherFunction = aFunction;

// When using the brackets (), we're *calling* the function
// so we'll get the value returned by it.
const returnValue = anotherFunction();
```
This also mean we can pass a function to another one, as an argument. Let's see one example:
```javascript
const uppercaseMessage = (message) => {
  return message.toUpperCase();
}

// This function accepts as arguments a string message, and a function.
// It then calls the given function to do its job.
const transform = (message, transformFunction) => {
  return transformFunction(message);
}

transform("hello", uppercaseMessage);
```

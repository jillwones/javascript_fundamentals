# Functions

* In JS a function is defined with the function literal syntax:
```javascript
() => {
  console.log('Hi there!');
};
```

```javascript
// 1. This function accepts no arguments
const printMessage = () => {
  console.log('Hi there!');
}

// 2. This function accepts one
const printMessage = (message) => {
  console.log(message);
}
```

* In Ruby we had implicit returns, JS doesnt have this - must explicitly say when / what to return from a function - otherwise undefined is returned.
* In Ruby if a function didnt take any args there would be no need for brackets to call the function, but in JS always have brackets.

* In JavaScript, to use a function outside of the file it is defined in, we need to "export" it using module.exports:

```javascript
// file: hello.js

const hello = () => {
  console.log('Hello!');
};

// Add this at the end of the file
module.exports = hello;

// In the node REPL
// Assuming we're in the same current directory where hello.js is.

const hello = require('./hello');

hello();
```
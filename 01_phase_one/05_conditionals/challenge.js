// Write a fizzBuzz function in JavaScript

const fizzBuzz = (number) => {
  if (number % 15 === 0) {
    return 'Fizzbuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number;
  }
}
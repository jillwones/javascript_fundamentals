// Write a function generateMessages that takes an array of
// names and returns an array of personalised messages for each
// name. For example, when given the array above, the function
// should return an array with the first element being the string
// 'Hi Anna! 50% off our best candies for you today!', the second element
// the string 'Hi Laura! 50% off our best candies for you today!',
// and so on.

const names = ["Anna", "Laura", "Josh", "Min", "Karla"];

const generateMessages = (arrayOfNames) => {
  return arrayOfNames.map((name) => {
    return `Hi ${name}! 50% off our best candies for you today!`;
  });
};

console.log(generateMessages(names));

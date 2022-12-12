// Let's go back to our candy promotion texts. 
// Your friend now wants to have a specific discount percentage 
// for each customer. After processing the list you're given, you 
// end up with the following array:

// An array of objects!
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = (arrayOfNamesAndDiscounts) => {
  return arrayOfNamesAndDiscounts.map((object) => {
    return `Hi ${object.name}! ${object.discount}% off our best candies for you today!`;
  });
};

console.log(generateMessages(namesAndDiscounts));
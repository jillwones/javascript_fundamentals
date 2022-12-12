// Declare a function checkLength that takes a phone number (as a string)
// as argument, and returns true if this phone number contains 10
// characters or less.

// Now declare a function filterLongNumbers that takes an array of
// phone numbers. This function should return only numbers that contain
// 10 characters or less. It should make use of the function checkLength
// written previously.

const array = [
  "1763687364",
  "4763687363",
  "7867867862",
  "AAAA#####AAAA#87@768767382672",
  "4763687363",
  "4763687363",
];

const checkLength = (phoneNumber) => {
  return phoneNumber.length < 11 ? true : false;
};

const filterArray = (array) => {
  return array.filter(checkLength);
};

console.log(filterArray(array));

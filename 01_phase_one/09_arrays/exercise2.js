// Create an array of all numbers from 1 to 10. Calculate the sum of all these 
// numbers by looping through the array.

// You can use the method forEach to iterate over each element.

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

sum = 0;

// for(i = 0; i < array.length; i++) {
//   sum += array[i];
//   console.log(sum);
// }

// or 

array.forEach((number) => {
  sum += number;
  console.log(sum);
})
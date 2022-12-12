// Define a function getNumberSign that takes a number and returns 
// either 'zero', 'positive' or 'negative' depending on its sign

const getNumberSign = (number) => {
  if (number > 0) {
    return ('positive');
  } else if (number < 0) {
    return ('negative');
  } else {
    return ('zero');
  }
}
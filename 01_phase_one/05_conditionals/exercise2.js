// A colleague just asked you some help to debug their code.

// const isValidLength = (phoneNumber) => {
//   const validLength = 11;
//   if (phoneNumber.length == validLength) {
//     true;
//   } else {
//     false;
//   }
// }

// working code, was missing explicit returns:

const isValidLength = (phoneNumber) => {
    const validLength = 11;
    if (phoneNumber.length === validLength) {
      return true;
    } else {
      return false;
    }
  }

// You know the function works when

// > isValidLength('00');
// false

// > isValidLength('00112233445');
// true
const createPhoneNumber = (numbers) => {
    // Variables
    const exactLength = 10;
    
    // Check length of phone numbers is proper length
    if (numbers.length !== exactLength) {
      return 'This is not a valid phone number';
    }
    
    // Get pieces of phone numbers
    const areaCode = numbers.slice(0,3).join('');
    const firstThree = numbers.slice(3,6).join('');
    const lastFour = numbers.slice(6,10).join('');
    
    return `(${areaCode}) ${firstThree}-${lastFour}`;
  };

/**
 * Write a function that accepts an array of 10 integers (between 0 and 9), that 
 * returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

 */
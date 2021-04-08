const findMissingLetter = (array) => {
  
    // Get first index of array
    const firstIndex = array[0];
    // Get last index of array
    const lastIndex = array[array.length - 1];
    // Answer string
    let answer = '';
    
    // Check for lowercase alphabet
    if ( firstIndex === firstIndex.toLowerCase()) {
      const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
      // Get string range and split into array
      const stringRange = lowerCaseAlphabet.substring(lowerCaseAlphabet.indexOf(firstIndex),lowerCaseAlphabet.indexOf(lastIndex)).split('');
      // Loop string range and check against array
      const filteredArr = stringRange.filter((curr) => {
        // Conditional for false
        if (!array.includes(curr)) answer += curr;
      })
      return answer;
    }
    
    // Check for uppercase alphabet
    if (firstIndex === firstIndex.toUpperCase()) {
      const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      // Get string range and split into array
      const stringRange = upperCaseAlphabet.substring(upperCaseAlphabet.indexOf(firstIndex),upperCaseAlphabet.indexOf(lastIndex)).split('');
      // Loop string range and check against array
      const filteredArr = stringRange.filter((curr) => {
        // Conditional for false
        if (!array.includes(curr)) answer += curr;
      })
      return answer;
    }
  };
  
  /**
   * #Find the missing letter

    Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

    You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
    The array will always contain letters in only one case.

    Example:

    ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

    ["a","b","c","d","f"] -> "e"
    ["O","Q","R","S"] -> "P"
    (Use the English alphabet with 26 letters!)

    Have fun coding it and please don't forget to vote and rank this kata! :-)

    I have also created other katas. Take a look if you enjoyed this kata!

    ALGORITHMSMATHEMATICSNUMBERS
   */
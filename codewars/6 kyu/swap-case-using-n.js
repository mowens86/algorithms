const swap = (s, n) => {
    // Variables
    const binary = n.toString(2).split('');
    const letter = s.split('');
    let indexTracker = 0;
    const maxIndexLength = binary.length;
    let counter = 0;
    const maxStrLength = s.length;
    let trackedStr = '';
  
    while(counter !== maxStrLength) {
      // Regex for any letters
      const regex = /^[A-Za-z]+$/;
      // If current index is a letter then...
      if (regex.test(letter[counter])) {
          
        // If indexTracker is max, reset to 0 for binary number index match
        indexTracker === maxIndexLength ? indexTracker = 0 : indexTracker;
        
        // If current binary number is 0 then add current letter
        if (binary[indexTracker] == 0) trackedStr += letter[counter];
        
        // If current binary number 1 and is uppercase then add it as a lowercase letter
        if (binary[indexTracker] == 1 && letter[counter] === letter[counter].toUpperCase()) trackedStr += letter[counter].toLowerCase();
        
        // If current binary number 1 and is lowercase then add it as a uppercase letter
        if (binary[indexTracker] == 1 && letter[counter] === letter[counter].toLowerCase()) trackedStr += letter[counter].toUpperCase()
        
        indexTracker++;
      }
      
      // If current index of letter array is not a letter than return as is
      if (!regex.test(letter[counter])) trackedStr += letter[counter];
        
      counter++;
    }
    
    return trackedStr;
  }

  /**
   * Your job is to change the given string s using a non-negative integer n.

  Each bit in n will specify whether or not to swap the case for each alphabetic character in s: if the bit is 1, swap the
   case; if its 0, leave it as is. When you finish with the last bit of n, start again with the first bit.

  You should skip the checking of bits when a non-alphabetic character is encountered, but they should be preserved in their original positions.

  Examples
  swap("Hello world!", 11)  -->  "heLLO wORLd!"
  ...because 11 is 1011 in binary, so the 1st, 3rd, 4th, 5th, 7th, 8th and 9th alphabetical characters have to be swapped:

  H e l l o   w o r l d !
  1 0 1 1 1 x 0 1 1 1 0 x
  ^   ^ ^ ^    ^ ^ ^
  More examples
  swap("gOOd MOrniNg", 7864)  -->  "GooD MorNIng"
  swap("", 11345)  -->  ""
  swap("the lord of the rings", 0)  -->  "the lord of the rings"
  FUNDAMENTALS
   */
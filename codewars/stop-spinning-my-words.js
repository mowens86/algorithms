const spinWords = (str) => {
    // Varibales
    let answer = '';
    // Split string into array of words
    const newArr = str.split(' ');
    // Loop through array
    newArr.map(index => {
      // Check how many letters are in each index
      index.length >= 5
        ? answer = answer.concat(`${index.split('').reverse().join('')} `) 
        : answer = answer.concat(`${index} `);
      });
    // Return and trim whitespace
    return answer.trim();
  };

  /**
   * Write a function that takes in a string of one or more words, 
   * and returns the same string, but with all five or more letter
   *  words reversed (Just like the name of this Kata). Strings passed in
   *  will consist of only letters and spaces. Spaces will be included only
   *  when more than one word is present.

    Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef
    sroirraw" spinWords( "This is a test") => returns "This is a test"
    spinWords( "This is another test" )=> returns "This is rehtona test"

    ALGORITHMSSTRINGSFORMATTING
   */
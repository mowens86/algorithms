const duplicateEncode = (word) => {
    // Empty string for answer
    let answer = '';
    // Convert string to lowercase
    const lettersOfWord = word.toLowerCase().split('');
    // Function to find duplicates
    const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);  
    // Array of duplicates
    const duplicates = findDuplicates(lettersOfWord);
    // Array of unique duplicates
    const uniqueDups = [...new Set(duplicates)].join('');
    // Loop through letters
    lettersOfWord.forEach((letter) => {
      // If uniqueDups include the current letter then add ) to answer string, else add ( to answer string
      uniqueDups.includes(letter) ? answer += ')' : answer += '(';
    })
    return answer;
  };

  /**
   * Description:
    The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if
     that character appears only once in the original string, or ")" if that character appears more than once in the original string.
      Ignore capitalization when determining if a character is a duplicate.

    Examples
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))((" 
    Notes

    Assertion messages may be unclear about what they display in some languages. 
    If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

    FUNDAMENTALSSTRINGSARRAYS
   */
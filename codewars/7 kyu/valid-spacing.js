const validSpacing = (s) => {
    // Split array
    const splitArr = s.split(' ');
    // Check if there's an extra empty space between array of characters
    if (splitArr.indexOf('') > 0) return false;
    // Slice beginning of string
    const beginning = s.slice(0,1);
    // Slice end of string
    const end = s.slice(-1);
    // Conditional for proper spacing at beginning and end of string
    if (beginning !== ' ' && end !== ' ') return true;
    if (beginning === ' ' || end === ' ') return false;
  };

  /**
   * Task
    Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

    For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

    'Hello world' = true
    ' Hello world' = false
    'Hello world  ' = false
    'Hello  world' = false
    'Hello' = true
    // Even though there are no spaces, it is still valid because none are needed
    'Helloworld' = true 
    // true because we are not checking for the validity of words.
    'Helloworld ' = false
    ' ' = false
    '' = true
    Note - there will be no punctuation or digits in the input string, only letters.

    FUNDAMENTALS
   */
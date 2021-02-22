const order = (words) => {
    // Variables
    let count = 0;
    const wordsArrayLength = words.split(' ').length;
    const answerArray = [];
    
    // While count is less than words array length
    while (count < wordsArrayLength) {
      // Add 1 to count
      count++;
      // Split words into array and loop through each word
      words.split(' ').forEach(word => {   
          // If the word has a match of the count then push it into the answerArray
          if (word.match(count) == count) answerArray.push(word);
        });
      };
  // Return and join each element in the answerArray with a space  
  return answerArray.join(' ');
  };

  /**
   * Description:
    Your task is to sort a given string. Each word in the string will contain a single number.
    This number is the position the word should have in the result.

    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

    If the input string is empty, return an empty string. The words in the input String
    will only contain valid consecutive numbers.

    Examples
    "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
    "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
    ""  -->  ""
    FUNDAMENTALSSTRINGS
   */
const squareDigits = (num) => {
    // Arrays
    const answerArr = [];
    // Adjust to a string
    const splitArr = num.toString()
                      .split('') // Split into an array
                      .forEach(number => { // Loop through the array
                        answerArr.push(parseInt(Math.pow(number, 2))); // Push into answerArr, convert to number and square the number
                      });
    // Return and parse the string into a number
    return parseInt(answerArr.join(''));
  };

  /**
   * Description:
    Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

    For example, if we run 9119 through the function, 811181 will come out,
    because 92 is 81 and 12 is 1.

    Note: The function accepts an integer and returns an integer

    FUNDAMENTALSMATHEMATICSALGORITHMSNUMBERS
   */
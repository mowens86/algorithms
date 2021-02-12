const digital_root = (n) => {
    // Variables
    let answer = 0;
    // Convert array to string and split
    const splitArr = n.toString().split('');
    // Loop through split array
    splitArr.forEach(curr => {
      answer += parseInt(curr); // Update answer
    });
    // Conditionals
    if (answer < 10) {
      return answer;
    } else {
      // While loop to keep reducing the answer until single digit
      while (answer > 9) {
        // Convert array to string and split
        const tempArr = answer.toString().split('');
        // Reset answer to 0
        answer = 0;
          // Loop through split array
          tempArr.forEach(curr => {
            answer += parseInt(curr); // Update answer
          });
      }
      // Once single digit is found return answer
      return answer;
    }
  };

  /**
   * Digital root is the recursive sum of all the digits in a number.

    Given n, take the sum of the digits of n. If that value has more than
    one digit, continue reducing in this way until a single-digit number
    is produced. The input will be a non-negative integer.

    Examples
        16  -->  1 + 6 = 7
        942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
        132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
        493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
        ALGORITHMSMATHEMATICSNUMBERSARITHMETIC
   */
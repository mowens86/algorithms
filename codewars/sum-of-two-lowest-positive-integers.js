const sumTwoSmallestNumbers = (numbers) => {  
    // Sort the numbers smallest to largest, slice the first two index, and add them up with reduce
    return numbers.sort((a,b) => a - b).slice(0,2).reduce((sum,curr) => sum + curr);
  };

  /**
   * Create a function that returns the sum of the two lowest positive numbers given
   *  an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

FUNDAMENTALSARRAYS
   */
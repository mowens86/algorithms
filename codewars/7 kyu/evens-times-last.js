const evenLast = (numbers) => {
    // If numbers is empty return 0
    if (numbers.length === 0) return 0;
    // Filter even indexes and sum up numbers
    const evens = numbers.filter((num,ind) => ind % 2 === 0).reduce((a,b) => a + b);
    // Get last index of numbers
    const lastNum = numbers[numbers.length - 1];
    // Multiply even indexes and the last numbers in the numbers and return
    return evens * lastNum;
  };

  /**
   * Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

    Indices in sequence start from 0.

    If the sequence is empty, you should return 0.

    FUNDAMENTALSARRAYS
   */
const largestPairSum = (numbers) => {
    const sortedArr = numbers.sort((a,b) => a - b);
    const twoHighestNums = [sortedArr[sortedArr.length - 2], sortedArr[sortedArr.length - 1]];
    return twoHighestNums[0] + twoHighestNums[1];
  };

  /**
   * Given a sequence of numbers, find the largest pair sum in the sequence.

    For example

    [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
    [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
    Input sequence contains minimum two elements and every element is an integer.

    FUNDAMENTALS
   */
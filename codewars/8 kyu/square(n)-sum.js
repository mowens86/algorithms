const squareSum = (numbers) => {
    if (numbers.length === 0) return 0;
    const squared = numbers.map(num => num * num);
    return squared.reduce((acc, curr) => acc + curr);
  };

  /**
   * Complete the square sum function so that it squares each number passed into it and then sums the results together.

    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

    FUNDAMENTALSARITHMETICMATHEMATICSALGORITHMSNUMBERSARRAYSLISTSDATA STRUCTURES
   */
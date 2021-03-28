const findOutlier = (integers) => {
    // Varablies
    const evens = [];
    const odds = [];
    // Loop through array and push all evens into its array and all others to odds
    integers.forEach(item => item % 2 === 0 ? evens.push(item) : odds.push(item));
    // return evens if length is 1 and if not odds
    return evens.length === 1 ? evens[0] : odds[0];
  };

  /**
   * You are given an array (which will have a length of at least 3,
   *  but could be very large) containing integers. The array is either
   *  entirely comprised of odd integers or entirely comprised of even
   *  integers except for a single integer N. Write a method that takes
   *  the array as an argument and returns this "outlier" N.

    Examples
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11 (the only odd number)

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160 (the only even number)
    ALGORITHMS
   */
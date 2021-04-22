const twistedSum = (n) => {
    let count = 0;
    const allNums = [];
    while (count <= n) {
      allNums.push(count);
      count++;
    }
    // Filter numbers less than 10
    const lessThanTen = allNums.filter(num => num < 10);
    // Filter numbers greater than 9
    const greaterThanNine = allNums.filter(num => num > 9);
    // Map new array that splits numbers greater than 9 and adds them
    const splitArr = greaterThanNine.map(num => {
      // Turn numbers into string and split array
      const splitNums = num.toString().split('');
      // Return as numbers and accumulate with reduce
      return splitNums.reduce((acc, val) => parseInt(acc) + parseInt(val));
    })
    // Combine both arrays and reduce
    const convertedArr = [...lessThanTen, ...splitArr].reduce((acc, curr) => acc + curr);
    return convertedArr;
  }

  /**
   * Find the sum of the digits of all the numbers from 1 to N (both ends included).

    Examples
    # N = 4
    1 + 2 + 3 + 4 = 10

    # N = 10
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

    # N = 12
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
    ALGORITHMSNUMBERSARITHMETICMATHEMATICS
   */
const halvingSum = (n) => {
    let halver = 2;
    let currentNum = n/halver;
    let arrayAnswer = [n];
    while (currentNum >= 1) {
      arrayAnswer.push(Math.floor(currentNum));
      halver *= 2;
      currentNum = n/halver;
    };
    return arrayAnswer.reduce((acc, curr) => acc + curr);
  };

  /**
   * Task
    Given a positive integer n, calculate the following sum:

    n + n/2 + n/4 + n/8 + ...
    All elements of the sum are the results of integer division.

    Example
    25  =>  25 + 12 + 6 + 3 + 1 = 47
    ALGORITHMS
   */
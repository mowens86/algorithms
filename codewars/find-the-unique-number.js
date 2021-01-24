const findUniq = (arr) => {
    // do magic
    const sorted = arr.sort((a,b) => b - a);
    const checkFirst = sorted.slice(0,2);
    const checkLast = sorted.slice(-2);
    if(checkFirst[0] !== checkFirst[1]) return checkFirst[0];
    if(checkLast[1] !== checkLast[0]) return checkLast[1];
  };

  /**
   * There is an array with some numbers. All numbers
   *  are equal except for one. Try to find it!

    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
    It’s guaranteed that array contains at least 3 numbers.

    The tests contain some very huge arrays, so think about performance.

    This is the first kata in series:

    Find the unique number (this kata)
    Find the unique string
    Find The Unique
    FUNDAMENTALSALGORITHMSNUMBERSARRAYS
   */
const findOdd = (A) => {
    // Variables
    let counts = {};
    // Loop through array
    for (let num of A) {
      counts[num] ? counts[num] += 1 : counts[num] = 1;
    }
    // Loop through counts object
    for (const [ key, value ] of Object.entries(counts)) {
      if ( value % 2 === 1 ) return parseInt(key);
    }
  };

  /**
   * Given an array of integers, find the one that appears an odd number
   *  of times.

    There will always be only one integer that appears an odd number of times.

    FUNDAMENTALS
   */
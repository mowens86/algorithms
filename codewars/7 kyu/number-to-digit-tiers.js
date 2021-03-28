const createArrayOfTiers = (num) => {
    // Variables
    const answer = [];
    // Convert number to string
    const convertedString = num.toString();
    // Create array
    const splitArr = convertedString.split('');
    // Loop through array, slice each iteration and add one to the next
    splitArr.forEach((curr,index) => answer.push(convertedString.slice(0, index + 1)));
    return answer;
  };

  /**
   * Create a function that takes a number and returns an array of
   *  strings containing the number cut off at each digit.

    Examples
    420 should return ["4", "42", "420"]
    2017 should return ["2", "20", "201", "2017"]
    2010 should return ["2", "20", "201", "2010"]
    4020 should return ["4", "40", "402", "4020"]
    80200 should return ["8", "80", "802", "8020", "80200"]
    PS: The input is guaranteed to be an integer in the range [0, 1000000]

    FUNDAMENTALSNUMBERSSTRINGSMAPSDATA STRUCTURESMAP/REDUCEALGORITHMS
   * 
   */
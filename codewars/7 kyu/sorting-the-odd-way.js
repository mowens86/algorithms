const sortItOut = (array) => {
    // Create two arrays
    const oddArr = [];
    const evenArr = [];
    
    // Loop through code
    array.forEach(curr => {
      const roundedDown = Math.floor(curr);
      roundedDown % 2 === 0 ? evenArr.push(curr) : oddArr.push(curr);
    });
    
    // Sort arrays
    const sortedOddAscending = oddArr.sort((a,b) => a-b);
    const sortedEvenDescending = evenArr.sort((a,b) => b-a);
    
    const resultArr = [...sortedOddAscending, ...sortedEvenDescending]
    return resultArr;
  };

  /**
   * Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted
   *  in ascending order and the even numbers are sorted in descending order after the last odd number. 
   * For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals,
   *  round them down while checking for odd/even. The output must have the original numbers!

    If there are no issues with the kata and you successfully completed it, please rank and upvote!

    FUNDAMENTALS
   */
const solution = (str) => {
    // If string is empty return empty array
    if (str === "") return [];
    // Create split array
    const splitArr = str.split("");
    // answer array
    const answer = [];
    // Loop through splitArr
    splitArr.forEach((curr, index, arr) => {
      // We're checking for odd numbers using the index but since it starts at zero,
      // we have to consider odd numbers as the even numbers
      // So, check if the index is even and if so push the last index plus the curr value into the answer array
      if (index % 2 === 1) answer.push(arr[index-1] + curr)
      // Check if the array length - 1 and index are equal to ensure we're at the end of the array and if the
      // length is an odd number, get the current value and add an _ to it and push into answer array
      if (arr.length - 1 === index && arr.length % 2 === 1) answer.push(curr + '_');
    })
     return answer;
  };

  /**
   * Description:
    Complete the solution so that it splits the string into pairs of two characters. If the string contains
    an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

    Examples:

    solution('abc') // should return ['ab', 'c_']
    solution('abcdef') // should return ['ab', 'cd', 'ef']
    ALGORITHMSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALSSTRINGS
   */
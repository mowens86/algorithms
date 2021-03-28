const uniqueInOrder = (iterable) => {
    // Empty array with answer
    const answer = [];
    // Check if item passed is a string
    if (typeof iterable === 'string') {
        // If item is string split into array
        const split = iterable.split('');
        // Filter by pushing current item if next index does not match
        split.filter((curr, index, arr) => {
        if(curr !== arr[index+1]) answer.push(curr)
      });
    } else {
      // Loop through each item in object
      iterable.forEach((curr, index, arr) => {
        // If current item isn't the same as the next index then push to answer
        if(curr !== arr[index+1]) answer.push(curr)
      });
    }
    return answer;
  };

  /**
   * Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

    For example:

    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
    FUNDAMENTALSADVANCED LANGUAGE FEATURESALGORITHMS
   */
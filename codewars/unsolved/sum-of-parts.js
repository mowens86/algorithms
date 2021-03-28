// Version 1 -> Does not pass as it times out
const partsSums = (ls) => {
    // Variables
    let copiedArr = [...ls];
    const listArr = [];
    
    // Conditional check if arr length is 0 return an array with 0
    if (copiedArr.length === 0) return [0];
    
    // While copied loop length is greater than 0
    while (copiedArr.length > 0) {
      // Push the sum of the copied Arr into the listArr
      listArr.push(copiedArr.reduce((a,b) => a + b));
      // Cut out the first index of the copiedArr
      copiedArr = copiedArr.slice(1,copiedArr.length);
    };
    // Push 0 at the end of listArr
    listArr.push(0);
    return listArr;
  };

  // Version 2 -> also does not pass as it times out -> will need to look up O(n)
  const partsSums = (ls) => {
    // Variables
    let copiedArr = [...ls];
    const listArr = [];
    if (copiedArr.length === 0) return [0];
    
    // Loop through copiedArr
    copiedArr.forEach((currVal, index, arr) => {
      // Push into listArr
      listArr.push(
          // Slice at current index through rest of array
          arr.slice(index, arr.length)
          // Sum it all up
          .reduce((a,b) => a + b));
    });
    
    listArr.push(0);
    return listArr;
  };

  /** WORKS BUT NEEDS BETTER PERFORMANCE AS KATA TIMES OUT
   * Let us consider this example (array written in general format):

    ls = [0, 1, 3, 6, 10]

    Its following parts:

    ls = [0, 1, 3, 6, 10]
    ls = [1, 3, 6, 10]
    ls = [3, 6, 10]
    ls = [6, 10]
    ls = [10]
    ls = []
    The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

    The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

    Other Examples:
    ls = [1, 2, 3, 4, 5, 6] 
    parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

    ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
    parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
    Notes
    Take a look at performance: some lists have thousands of elements.
    Please ask before translating.
    ALGORITHMSFUNDAMENTALSPERFORMANCE
   */
const doubleEveryOther = (a) => 
// Loop each number along with the index using HOF map
  a.map((number,index) => {
    // If the index is odd, multiply the number by two, else just return the number
  return index % 2 === 1 ? number * 2 : number;
});

/**
 * Write a function that doubles every second integer in a list, starting from the left.

    Example:

    For input array/list :

    [1,2,3,4]
    the function should return :

    [1,4,3,8]
    FUNDAMENTALSLISTSDATA STRUCTURESARRAYSALGORITHMS
 */
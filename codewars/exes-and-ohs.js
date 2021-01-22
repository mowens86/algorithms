const XO = (str) => {
    // Variables needed
    let numberOfX = 0;
    let numberOfO = 0;
    let equalFlag = false;
    
    // Convert string to lowercase
    const lowerCaseString = str.toLowerCase();
    
    // Regular expression to check for x or o with global modifier
    const regex = /x|o/g;
    
    // Get array of x's and o's
    const xoArray = lowerCaseString.match(regex);
    
    // Check if xoArray has any x's or o's
    if (xoArray === null) {
      equalFlag = true;
      return equalFlag;
    } else {
      // Loop through array
      xoArray.forEach(el => {
        if (el === 'x') numberOfX++; // check if element is x and add 1 to numberOfX if so
        if (el === 'o') numberOfO++; // check if element is o and add 1 to numberOfO if so
      });
      
      // Check numbers
      return numberOfX === numberOfO ? equalFlag = true : equalFlag = false;
    }
    
  };

  /**
   * Check to see if a string has the same amount of 'x's and 'o's. The method must return a 
   * boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
FUNDAMENTALS
   */
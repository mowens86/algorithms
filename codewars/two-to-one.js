const longest = (s1, s2) => {
    // Variables
    const sortArr = s1.concat(s2).split('').sort();
    // Filter through array
    let uniqueChars = sortArr.filter((currVal,index) => {
      // Return indexes that match current value
      return sortArr.indexOf(currVal) === index;
    });
    // Return and join array to create a string
    return uniqueChars.join('');
  };

  /**
   * Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

  Examples:
  a = "xyaabbbccccdefww"
  b = "xxxxyyyyabklmopq"
  longest(a, b) -> "abcdefklmopqwxy"

  a = "abcdefghijklmnopqrstuvwxyz"
  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
  FUNDAMENTALS
   */
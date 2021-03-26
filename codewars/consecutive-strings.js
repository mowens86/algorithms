const longestConsec = (strarr, k) => {
    // Check if k is less than 1 and return empty string
    if (k < 1 || strarr.length < k) return "";
    // If k is one then sum the length of the longest word and return it
    if (k === 1) return strarr.reduce((a,b) => a.length > b.length ? a : b);
    
    let answer = '';
    
    if (k > 1) {
      // Loop through array
       strarr.forEach((str, index, arr) => {
        // Variable for current string
        const currStr = str;
        // Slice next index of string and end at index up to k
        const nextStr = arr.slice(index + 1, index + k).join('');
        // If nextStr isn't undefined then...
        if (nextStr !== undefined) {
          // Concatenate currentStr with nextStr
          const concatStr = currStr.concat(nextStr);
          // If concatStr's length is greater than the current answer, then replace it, otherwise keep it.
          concatStr.length > answer.length ? answer = concatStr : answer;
        }
      });
      return answer;
    }
  };

  /**
   *  You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

    Examples:
    strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

    Concatenate the consecutive strings of strarr by 2, we get:

    treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
    folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
    trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
    blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
    abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

    Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
    The first that came is "folingtrashy" so 
    longest_consec(strarr, 2) should return "folingtrashy".

    In the same way:
    longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
    n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

    Note
    consecutive strings : follow one after another without an interruption

    FUNDAMENTALS
   */
const wordify = (n) => {
    const stringifiedNum = n.toString();
    
    const singleDigit = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
    }
    
    const teens = {
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen'    
    }
    
    const doubleDigit = {
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
    }
    
    const tripleDigit = 'hundred';
    
    if (n < 10) {
      for (let [key, value] of Object.entries(singleDigit)) {
        if (key == n) return `${value}`;
      }
    }
    
    if ( n > 9 && n < 20) {
      for (let [key, value] of Object.entries(teens)) {
        if (key == n) return `${value}`;
      }    
    }
    
    if (n >= 20) {
      let answer = '';
      const splitNums = stringifiedNum.split('');
      
      
      if (splitNums.length === 2) {
        const double = splitNums[0];
        const single = splitNums[1];
        for (let [key, value] of Object.entries(doubleDigit)) {
          if (key == double) answer += `${value} `;
        }
        for (let [key, value] of Object.entries(singleDigit)) {
          if (key == single) answer += `${value}`;
        }
        return answer.trim();
      }
      
      if (splitNums.length === 3) {
        const triple = splitNums[0]
        const double = splitNums[1];
        const single = splitNums[2];
        const doubleTeen = `${double}${single}`;
        
        // Triple digits check
        for (let [key, value] of Object.entries(singleDigit)) {
          if (key == triple) answer += `${value} ${tripleDigit} `;
        }
        // Double digit checks
        if (double >= 2) {
          for (let [key, value] of Object.entries(doubleDigit)) {
            if (key == double) answer += `${value} `;
          }
          for (let [key, value] of Object.entries(singleDigit)) {
            if (key == single) answer += `${value}`;
          }
        }    
        
        // Teen check
        if (double == 1) {
          for (let [key, value] of Object.entries(teens)) {
            if (key == doubleTeen) answer += `${value} `;
          }   
        }
        
        // Single digit check
        if (double == 0) {
          for (let [key, value] of Object.entries(singleDigit)) {
            if (key == single) answer += `${value} `;
          }   
        }
        return answer.trim();
      }
    }
  }

  /**
   * Turn a given number (an integer > 0, < 1000) into the equivalent English words. For the purposes of this kata, no hyphen is needed in numbers 21-99.

    Examples:

    wordify(1) == "one"
    wordify(12) == "twelve"
    wordify(17) == "seventeen"
    wordify(56) == "fifty six"
    wordify(90) == "ninety"
    wordify(326) == "three hundred twenty six"
    Based on "Speech module" mission from Checkio.

    ALGORITHMSNUMBERS
   */
const  pigIt = (str) => {
    // Variables
    let splitArr = str.split(' ');
    let answer = '';
    let punctuation = '';
    
    // Check for punctuation
    const checkPunctuation = !!str.match(/[.,:!?]/);
    if (checkPunctuation) {
      punctuation += str.slice(str.length - 2, str.length);
      splitArr = str.slice(0, str.length - 2).split(' ');
    }
    
    // Loop through array
    splitArr.forEach(currVal => {
         const firstPart = currVal.slice(1,currVal.length);
         const lastPart = currVal.slice(0,1) + 'ay';
         const wholePigLatin = firstPart + lastPart;
         answer += `${wholePigLatin} `;   
    });
    
    answer = answer.trim();
    answer += punctuation;
    return answer;
  };

  /**
   * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

    Examples
    pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    pigIt('Hello world !');     // elloHay orldway !
    ALGORITHMS
   */
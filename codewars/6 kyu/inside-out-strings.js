const insideOut = (x) => {
    const answerArr = x.split(' ')
                    .map(word => {
                      if (word.length <= 3) return word;
                        
                      // Split the word into an array
                        const lettersArr = word.split('');
                        const lettersArrLength = lettersArr.length;
                      
                      // If word has even number of characters
                      if (word.length % 2 === 0) {
                        
                        // Split array in 2 halves, reverse them, and join them
                        const firstHalf = lettersArr
                                                    .slice(0, lettersArrLength / 2)
                                                    .reverse()
                                                    .join('');
                        const lastHalf = lettersArr
                                                   .slice(lettersArrLength / 2, lettersArrLength)
                                                   .reverse()
                                                   .join('');
                        // Combine two halves
                        return `${firstHalf}${lastHalf}`; 
                      }
                      
                      // If word has odd number of characters
                      if (word.length % 2 === 1) {
                        
                        // Split array into 2 halves, but leave out middle character, reverse, and join arr
                        const firstHalf = lettersArr
                                                    .slice(0, Math.floor(lettersArrLength / 2))
                                                    .reverse()
                                                    .join('');
                        const lastHalf = lettersArr
                                                   .slice((lettersArr.length / 2) + 1)
                                                   .reverse()
                                                   .join('');
                        const middleChar = lettersArr.slice(Math.floor(lettersArrLength / 2), (lettersArr.length / 2) + 1);
                        
                        // Combine all strings
                        return `${firstHalf}${middleChar}${lastHalf}`;
                      }
                    })
    return answerArr.join(' ');
  };

  /**
   * You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
   * By this I mean the internal letters will move out, and the external letters move toward the centre.

    If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

    An example should clarify:

    'taxi' would become 'atix' 'taxis' would become 'atxsi'

    FUNDAMENTALSSTRINGSARRAYS
   */
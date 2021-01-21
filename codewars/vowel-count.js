const getCount = (str) => {
    let vowelsCount = 0;
    
    // Split string
    const splitArr = str.split('');
    
    // Loop through splitArr
    splitArr.forEach(letter => {
      
      // Check for each vowel
         letter === 'a' 
      || letter === 'e' 
      || letter === 'i' 
      || letter === 'o' 
      || letter === 'u' ? vowelsCount++ : vowelsCount = vowelsCount; // If vowel is found add to count or keep same
    });
    
    return vowelsCount;
  };

/**
 * Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

FUNDAMENTALSSTRINGSUTILITIES
*/
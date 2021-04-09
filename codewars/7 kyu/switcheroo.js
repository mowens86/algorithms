const switcheroo = (x) => {
    // Turn string into array
      const convertedArr = x.split('');
      // Loop through array
      const swapLettersArr = convertedArr.map(letter => {
        // Replace any a's with b's and b's with a's and leave c's
        if (letter === 'a') return letter.replace('a', 'b');
        if (letter === 'b') return letter.replace('b', 'a');
        if (letter === 'c') return letter;
      });
      // Join the array as a string and return
      return swapLettersArr.join('');  
    };

    /**
     * Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

    Example:

    'acb' --> 'bca'
    'aabacbaa' --> 'bbabcabb'

    FUNDAMENTALSSTRINGS
     */
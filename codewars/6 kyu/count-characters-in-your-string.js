const count = (string) => {
    const letterObject = {};
    const letters = string
                          .split('')
                          .forEach( letter => 
                                     letterObject[letter] = (letterObject[letter] + 1) || 1
                                  )
    return letterObject;
  };

  /**
   * The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

    What if the string is empty? Then the result should be empty object literal, {}.

    FUNDAMENTALSSTRINGSASCIICHARACTER ENCODINGSFORMATS
   */
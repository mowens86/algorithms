const swap = (str) => {
    let swappedLetters = '';
    const splitArr = str.split('');
    splitArr.forEach(letter => {
      letter === letter.toUpperCase() 
        ? swappedLetters += letter.toLowerCase() 
        : swappedLetters += letter.toUpperCase();
    })
    return swappedLetters;
  }

  /**
   * Given a string, swap the case for each of the letters.

    e.g. CodEwArs --> cODeWaRS

    Examples
    ""           ->   ""
    "CodeWars"   ->   "cODEwARS"
    "abc"        ->   "ABC"
    "ABC"        ->   "abc"
    "123235"     ->   "123235"
    FUNDAMENTALS
   */
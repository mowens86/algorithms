const findShort = (s) => {
    const wordsArr = s.split(" ");
    let shortestWord = 100;
    wordsArr.forEach(word => {
      if (word.length < shortestWord) shortestWord = word.length;
    })
    return shortestWord;
  };

  /**
   * Simple, given a string of words, return the length of the shortest word(s).

    String will never be empty and you do not need to account for different data types.

    FUNDAMENTALS
   */
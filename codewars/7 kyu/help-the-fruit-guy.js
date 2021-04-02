const removeRotten = (bagOfFruits) => {
    // Check for empty array first
    if (bagOfFruits === null || bagOfFruits === undefined) return [];
    if (bagOfFruits.length === 0) return [];
    const answerArr = [];
    bagOfFruits.forEach(fruit => {
      const regex = new RegExp('rotten');
      if (fruit.match(regex)) {
        const removeRottenWord = fruit.replace(regex, '').toLowerCase();
        answerArr.push(removeRottenWord);
      } else {
        answerArr.push(fruit);
      }
    });
    return answerArr;
  };

  /**
   * Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace
   *  all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be
   *  ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an
   *  array of strings where all the rotten fruits are replaced by good ones.

    Notes
    If the array is null/nil/None or empty you should return empty array ([]).
    The rotten fruit name will be in this camelcase (rottenFruit).
    The returned array should be in lowercase.
    FUNDAMENTALSARRAYSSTRINGS
   */
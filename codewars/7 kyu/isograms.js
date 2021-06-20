const isIsogram = (str) => {
    const lowerCaseStr = str.toLowerCase();
    const splitStr = lowerCaseStr.split('');
    const letterIndexes = [];
    
    splitStr.forEach(letter => {
      letterIndexes.push(lowerCaseStr.indexOf(letter))
    })
    
    const sortedIndexes = letterIndexes.sort();
    return sortedIndexes.length === new Set(sortedIndexes).size ? true : false;
  };

  /**
   * Description:
    An isogram is a word that has no repeating letters, consecutive
     or non-consecutive. Implement a function that determines whether
      a string that contains only letters is an isogram. Assume the empty
       string is an isogram. Ignore letter case.

    isIsogram("Dermatoglyphics") == true
    isIsogram("aba") == false
    isIsogram("moOse") == false // -- ignore letter case
    FUNDAMENTALSSTRINGS
   */
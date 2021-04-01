var validWord = function(dictionary, word) {
    console.log(dictionary, word)
    
    // Variables
    let copiedWord = word;
    // Check if dictionary empty
    if (dictionary.length < 1) return false;
    // Loop through the dictionary
    const mappedArr = dictionary.map((curr, ind) => {
      // Create regexp
      const regex = new RegExp(curr);
      // Split all letters into array
      const splitArr = curr.split('');
      splitArr.forEach(val => {
        if (!copiedWord.match(val)) copiedWord += val;
        if (copiedWord.match(val)) copiedWord = copiedWord.replace(val, '');
  //       console.log(val)
        
        
      })
      
  
      console.log(copiedWord)
      })
    
      return copiedWord.length === 0 ? true : false;
  };
const vowelChange = (str, vow) => {
    const lettersArr = str.split('');
    let answerSentence = '';
    lettersArr.forEach(letter => {
            letter == 'a'
         || letter == 'e'
         || letter == 'i'
         || letter == 'o'
         || letter == 'u' ? answerSentence += vow : answerSentence += letter;
    });
    return answerSentence;
  };

  /**
   * Create a function that changes all the vowels (excluding y)
   *  in a string, and changes them all to the same vowel. The first
   *  parameter of the function is the string, and the second is the
   *  vowel that all the vowels in the string are being changed to.

    For Example:

    vowelChange("Hannah Hannah bo-bannah Banana fanna fo-fannah Fee,
     fy, mo-mannah. Hannah!",'i') // => 'Hinnih Hinnih bi-binnih Binini
      finni fi-finnih Fii, fy, mi-minnih. Hinnih!'
    
      vowelChange('adira wants to go to the park', 'o') // =>'odoro wonts to go to tho pork'
    There will never be an uppercase letter as an input.

    FUNDAMENTALS
   */
const fakeBin = (x) => {
    const splitArr = x.split('');
    let answerStr = '';
    const mappedArr = splitArr.map(num => {
      const convertedNum = parseInt(num);
      return num < 5 ? answerStr += '0' : answerStr += '1';
    });
      return answerStr;
  };

  /**
   * Description:
    Given a string of digits, you should replace any digit below 5
     with '0' and any digit 5 and above with '1'. Return the resulting string.

    FUNDAMENTALSSTRINGSARRAYS
   */
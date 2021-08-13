const sum = (digits) => {
    if (digits === undefined) return '';
    const convertToStr = digits.toString();
    const splitArr = convertToStr.split('');
    const numArr = [];
    let answerStr = '';
    splitArr.forEach(num => numArr.push(parseInt(num)));
    const sumOfNums = numArr.reduce((acc,curr) => acc + curr);
    splitArr.forEach((num,index) => {
      index === splitArr.length - 1 ? answerStr += `${num} = ${sumOfNums}` : answerStr += `${num} + `;
    });
    return answerStr;
  };

  /**
   * It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

    Digits can be a number or a string, and you should control it is no undefined and return an empty string.
    Digits can be a number or a string, and you should ensure it is not None and return an empty string.
    To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.

    FUNDAMENTALSSTRINGS
   */
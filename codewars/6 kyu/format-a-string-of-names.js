const list = (names) => {
    let answerStr = '';
    if (names.length === 1) return Object.values(names[0]).join('');
    const lastIndex = names.length - 1;
    const secondToLastIndex = names.length - 2;
    names.forEach((name, index) => {
      if (index === lastIndex) answerStr += `& ${Object.values(name)}`;
      if (index === secondToLastIndex) answerStr += `${Object.values(name)} `;
      if (index !== secondToLastIndex && index !== lastIndex) answerStr += `${Object.values(name)}, `;
    });
    return answerStr;
  };

  /**
   * Given: an array containing hashes of names

    Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

    Example:

    list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
    // returns 'Bart, Lisa & Maggie'

    list([ {name: 'Bart'}, {name: 'Lisa'} ])
    // returns 'Bart & Lisa'

    list([ {name: 'Bart'} ])
    // returns 'Bart'

    list([])
    // returns ''
    Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

    FUNDAMENTALSSTRINGSFORMATTINGALGORITHMS
   */
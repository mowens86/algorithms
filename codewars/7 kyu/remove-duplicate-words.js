const removeDuplicateWords = (s) => {
    return s
    .split(' ')
    .filter((item, pos, self) => {
      return self.indexOf(item) == pos;
    })
    .join(' ');
};

/**
 * Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

    Example:

    Input:

    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

    Output:

    'alpha beta gamma delta'

    ALGORITHMSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALS
 */
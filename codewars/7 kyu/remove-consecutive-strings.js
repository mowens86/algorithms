const removeConsecutiveDuplicates = s => {
  const arrStr = s.split(" ");
  const cleanArr = arrStr.map((word, index) => {
    let currentWord = word;
    return currentWord === arrStr[index + 1] ? '' : currentWord;
  });
  return cleanArr.filter(n => n).join(" ");
};

/**
 * Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

  --> "alpha beta gamma delta alpha beta gamma delta"
  ALGORITHMSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALS
 */
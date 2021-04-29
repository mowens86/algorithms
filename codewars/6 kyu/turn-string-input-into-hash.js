const strToHash = (str) => {
    let answer = {};
    if (str.length === 0) return answer;
    const splitArr = str.split(',');
    splitArr.filter((curr) => {
      const splitKeyValue = curr.split('=');
      answer[splitKeyValue[0].trim()] = parseInt(splitKeyValue[1]);
    });
    return answer;
  };

  /**
   * Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

    "a=1, b=2, c=3, d=4"
    This string should return a hash that looks like

    { 'a': 1, 'b': 2, 'c': 3, 'd': 4}
    ALGORITHMSHASHESDATA STRUCTURESPARSINGSTRINGS
   */


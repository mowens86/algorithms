const accum = (s) => {
	// Variables
  let count = 0;
  let answer = '';
  const splitArr = s.split('');
  // Capitalize function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // Loop through array
  splitArr.forEach(index => {
    // Add count
    count += 1;
    // Conditionals
    if (count < 2) {
      return answer += `${index.toUpperCase()}-`; // If less than 2 capitalize it and add to answer string
    } else {
      return answer += `${capitalizeFirstLetter(index.repeat(count).toLowerCase())}-`; // Else capitalize first letter and repeat rest in lowercase
    };
  });
  // Return the string and remove the last character to take out the last -
  return answer.substring(0, answer.length - 1);
};

/**
 * This time no story, no theory. The examples below show you how
 *  to write function accum:

    Examples:

    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
    The parameter of accum is a string which includes only letters from a..z and A..Z.

    FUNDAMENTALS
 */
const sortVowels = (s) => {
    if (typeof s === 'number' 
        || typeof s === 'undefined' 
        || typeof s === '') 
      return '';
    const splitStr = s.split('');
    const maxLength = splitStr.length;
    let answer = '';
    splitStr.forEach((letter,ind) => {
      const regex = /[aeiou]/i;
      const currentNumber = ind + 1;
      if (currentNumber !== maxLength) {
        regex.test(letter) ? answer += `|${letter}\n` : answer += `${letter}|\n`;
      } else {
        regex.test(letter) ? answer += `|${letter}` : answer += `${letter}|`;
      }
    });
    return answer;
  };

  /**
   * Sort the Vowels!
In this kata, we want to sort the vowels in a special format.

Task
Write a function which takes a input string s and return a string in the following way:

   
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "Codewars" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:

List all the Vowels on the right side of |
List every character except Vowels on the left side of |
Case doesn't matter
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
FUNDAMENTALS
   */
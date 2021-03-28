const alphabetPosition = (text) => {
    // Variables
    let answer = '';
    // Lowercase the string, split it, and loop through it
    const loopedArr = text.toLowerCase().split('')
                        .forEach(letter => {
                          // Switch statement for every letter in the alphabet
                          switch(letter) {
                              case 'a':
                                answer += '1 ';
                                break;
                              case 'b':
                                answer += '2 ';
                                break;
                              case 'c':
                                answer += '3 ';
                                break;
                              case 'd':
                                answer += '4 ';
                                break;
                              case 'e':
                                answer += '5 ';
                                break;
                              case 'f':
                                answer += '6 ';
                                break;
                              case 'g':
                                answer += '7 ';
                                break;
                              case 'h':
                                answer += '8 ';
                                break;
                              case 'i':
                                answer += '9 ';
                                break;
                              case 'j':
                                answer += '10 ';
                                break;
                              case 'k':
                                answer += '11 ';
                                break;
                              case 'l':
                                answer += '12 ';
                                break;
                              case 'm':
                                answer += '13 ';
                                break;
                              case 'n':
                                answer += '14 ';
                                break;
                              case 'o':
                                answer += '15 ';
                                break;
                              case 'p':
                                answer += '16 ';
                                break;
                              case 'q':
                                answer += '17 ';
                                break;
                              case 'r':
                                answer += '18 ';
                                break;
                              case 's':
                                answer += '19 ';
                                break;
                              case 't':
                                answer += '20 ';
                                break;
                              case 'u':
                                answer += '21 ';
                                break;
                              case 'v':
                                answer += '22 ';
                                break;
                              case 'w':
                                answer += '23 ';
                                break;
                              case 'x':
                                answer += '24 ';
                                break; 
                              case 'y':
                                answer += '25 ';
                                break;
                              case 'z':
                                answer += '26 ';
                                break;
                              default:
                                break;
                          }
                        });
    // Return the answer and trim the string
    return answer.trim();
  };

  /**
   * In this kata you are required to, given a string, replace every letter
   *  with its position in the alphabet.

    If anything in the text isn't a letter, ignore it and don't return it.

    "a" = 1, "b" = 2, etc.

    Example
    alphabetPosition("The sunset sets at twelve o' clock.")
    Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

    FUNDAMENTALSSTRINGS
   */
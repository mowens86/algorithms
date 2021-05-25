const decode = (string) => {
    const splitNums = string.split('');
    let decodedString = '';
    const mappedNums = splitNums.map(num => {
      
      switch(num) {
          case '0':
            decodedString += '5';
            break;
          case '1':
            decodedString += '9';
            break;
          case '2':
            decodedString += '8';
            break;
          case '3':
            decodedString += '7';
            break;
          case '4':
            decodedString += '6';
            break;
          case '5':
            decodedString += '0';
            break;   
          case '6':
            decodedString += '4';
            break;
          case '7':
            decodedString += '3';
            break;
          case '8':
            decodedString += '2';
            break;
          case '9':
            decodedString += '1';
            break;        
      }
      
    })
    
    return decodedString;
  };

  /**
   * Fans of The Wire will appreciate this one. For those that haven't seen the show,
   *  the Barksdale Organization has a simple method for encoding telephone numbers exchanged
   *  via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

    Here's a keypad for visualization.

    ┌───┬───┬───┐
    │ 1 │ 2 │ 3 │
    ├───┼───┼───┤
    │ 4 │ 5 │ 6 │
    ├───┼───┼───┤
    │ 7 │ 8 │ 9 │
    └───┼───┼───┘
        │ 0 │
        └───┘
    Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence,
     but it would take way too long to decode by hand. Could you write a program to do this for us?

    Write a funciton called decode(). Given an encoded string, return the actual phone number in string
     form. Don't worry about input validation, parenthesies, or hyphens.

    PUZZLESGAMESCRYPTOGRAPHYSECURITY
   */

  
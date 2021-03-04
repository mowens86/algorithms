const bingo = (ticket, win) => {
    // Variables
    let winCounter = 0;
    // Convert ticket array to key value pairs
    const keyValPairs = Object.assign(...ticket.map(([key, val]) => ({[key]: val})));
    // Loop through key value pairs with the use of destructuring
    for (const [key, value] of Object.entries(keyValPairs)) {
      // Split key into array of strings and map through each letter & index
      const keySplitArr = key.split('').map((letter, index) => {
        // If the charCode of the key at the index matches with the value add one to the counter and nothing if not
        key.charCodeAt(index) === value ? winCounter++ : winCounter; 
      });
    }
    return winCounter >= win ? 'Winner!' : 'Loser!'; 
  };

  /**
   * Time to win the lottery!

    Given a lottery ticket (ticket), represented by an array of 2-value arrays,
     you must find out if you've won the jackpot.

    Example ticket:

    [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
    To do this, you must first count the 'mini-wins' on your ticket. Each
     subarray has both a string and a number within it. If the character
      code of any of the characters in the string matches the number, you
       get a mini win. Note you can only have one mini win per sub array.

    Once you have counted all of your mini wins, compare that number to the
     other input provided (win). If your total is more than or equal to (win),
      return 'Winner!'. Else return 'Loser!'.

    All inputs will be in the correct format. Strings on tickets are not
     always the same length.

    FUNDAMENTALSSTRINGSNUMBERSARRAYS
   */


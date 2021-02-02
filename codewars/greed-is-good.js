const score = ( dice ) => {
    // Variables
    let points = 0;
    let count = {};
  
    // Loop through
    dice.forEach(index => {
      // Counts total of each index
      count[index] = (count[index] || 0) + 1;
    });
    
    // Loop through count object
    for (let i in count) {
      
      // If there is 2 counts or less of any index...
      if(count[i] <= 2) {
        switch(i) {
          case '1':
            points += 100 * count[i];
            break;
          case '5':
            points += 50 * count[i];
            break;
          default:
            break;
        }
      } 
      
      // If there is 3 counts of any index then...
      if(count[i] >= 3) {
        // Case statement for each of the points
        switch(i) {
          case '1':
            points += 1000;
            break;
          case '6':
            points += 600;
            break;
          case '5':
            points += 500;
            break;
          case '4':
            points += 400;
            break;
          case '3':
            points += 300;
            break;
          case '2':
            points += 200;
            break;
          default:
            break;
          }
        }
      
  //  If there is more than counts of any index...
      if(count[i] > 3) {
        switch(i) {
          case '1':
            points += 100 * (count[i] - 3);
            break;
          case '5':
            points += 50 * (count[i] - 3);
            break;
          default:
            break;
        }
      }   
    }
    return points;
  };

  /**
   * Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

    Three 1's => 1000 points
    Three 6's =>  600 points
    Three 5's =>  500 points
    Three 4's =>  400 points
    Three 3's =>  300 points
    Three 2's =>  200 points
    One   1   =>  100 points
    One   5   =>   50 point
    A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

    Example scoring

    Throw       Score
    ---------   ------------------
    5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
    1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
    2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
    In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

    ALGORITHMS
   * 
   */
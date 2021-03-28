const persistence = (num) => {
    // Variables
   let numberLeft = num;
   let numOfTimesMultiplied = 0;
   
   // While loop to continue until less than 10
   while (numberLeft > 9) {
     // Turn num into string and split into array
     const splitArr = numberLeft.toString().split('');
     // Adjust numberLeft to 1
     numberLeft = 1;
     // Add one to numbOfTimes Multiplied
     numOfTimesMultiplied++;
     // Loop through array
     splitArr.forEach(number => {
       // Convert string to number
       const parsedNum = parseInt(number);
       // Multiply number
       numberLeft *= parsedNum;
     });
   };
   return numOfTimesMultiplied;
 };

 /**
  * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

    For example:

    persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                        // and 4 has only one digit

    persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                            // 1*2*6 = 12, and finally 1*2 = 2

    persistence(4) === 0 // because 4 is already a one-digit number
    FUNDAMENTALSNUMBERS
  */
const sortSequence = (sequence) => {
    // Initial splits and array configuration
    const mapped = [];
    let cutOff = [];
    sequence.forEach(el => {
      if (el.toString().length >= 1 && el !== 0) cutOff.push(el);
      if (el === 0) {
        mapped.push(cutOff);
        cutOff = [];
      }  
    })
    
    // Convert string to 2d array with integers
    const intArr = [];
    const convertedInts = mapped.map(el => {
      const tempArr = [];
      el.map(int => {
        const newInt = parseInt(int);
        tempArr.push(newInt);
      });
      const sortedTemp = tempArr.sort((a,b) => a - b)
      intArr.push(sortedTemp);
    });
    
    // Sort subarrays from lowest to highest sums
    const sortByLowest = intArr.sort((a,b) => {
      console.log(a.reduce((acc,cur) => acc + cur), b.reduce((acc,cur) => acc + cur))
      return a.reduce((acc,cur) => acc + cur) - b.reduce((acc,cur) => acc + cur)})
           
    
    // Add zeros to the arrays
    const addZero = sortByLowest.map(el => {
      const zero = 0;
      return el.concat(zero);
    });
    
    // adjust 2d array to single array
    let answerArr = [];
    addZero.forEach(el => answerArr = answerArr.concat(el));
    return answerArr;
  };
  
  /**
   * When no more interesting kata can be resolved, I just choose to create the new kata, to solve their own, to enjoy the process --myjinxin2015 said

Description:
You are given a number sequence(an array) that contains some positive integer and zero.

[3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]
It can be split to some zero-terminated sub sequence, such as [3,2,1,0],[5,6,4,0]...

Your task is: First, sort each sub sequence according to the ascending order(don't sort the zero, it always at the end); Second, sort all sub sequence according to their sum value(ascending order too).

Arguments:
sequence: The number sequence.
Results & Note:
The result is the sorted number sequence.
If some sub sequences have the same sum value, sort them according to their original order.
Some Examples
sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,4,2,8,0]) should return
[1,2,3,0,1,3,5,0,2,4,8,0,4,5,6,0]

sortSequence([3,2,1,0,5,6,4,0,1,5,3,0,2,2,2,0]) should return
[1,2,3,0,2,2,2,0,1,3,5,0,4,5,6,0]

sortSequence([2,2,2,0,5,6,4,0,1,5,3,0,3,2,1,0]) should return
[2,2,2,0,1,2,3,0,1,3,5,0,4,5,6,0]
PUZZLESGAMES
   */
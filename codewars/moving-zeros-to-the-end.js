const moveZeros = (arr) => {
    // TODO: Program me
    const nonZeroArr = [];
    const zeroArr = [];
    
    for (let index of arr) {
      index === 0 ? zeroArr.push(index) : nonZeroArr.push(index);
    }
    
    return nonZeroArr.concat(zeroArr);
  };

  /**
   * Write an algorithm that takes an array and moves all of the zeros to the end, 
   * preserving the order of the other elements.

    moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
    ALGORITHMS INTERVIEW QUESTIONS ARRAYS SORTING
   */
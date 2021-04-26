const stray = (numbers) => {
    // Variables
    const initialNum = numbers[0];
    const arrayOne = [];
    const arrayTwo = [];
    // Filter numbers into variable arrays
    numbers.filter(e => e !== initialNum ? arrayOne.push(e) : arrayTwo.push(initialNum));
    // Return the array with a length of one, this is the stray number
    return arrayOne.length === 1 ? arrayOne[0] : arrayTwo[0];
  };

  /**
   * Description:
    You are given an odd-length array of integers, in which all of them are the same, except for one
    single number.

    Complete the method which accepts such an array, and returns that single different number.

    The input array will always be valid! (odd-length >= 3)

    Examples
    [1, 1, 2] ==> 2
    [17, 17, 3, 17, 17, 17, 17] ==> 3
    FUNDAMENTALSNUMBERSALGORITHMS
   */
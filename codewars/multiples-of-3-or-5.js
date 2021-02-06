const solution = (number) => {
    // Variables
    const countsArr = [];
    let threesCount = 0;
    let fivesCount = 0;

    // While loop to count the threes
    while (threesCount < number) {
        threesCount += 3;
        if (threesCount < number) countsArr.push(threesCount);
    }

    // While loop to count the fives
    while (fivesCount < number) {
        fivesCount += 5;
        if (fivesCount < number) countsArr.push(fivesCount);
    }

    const sortedArr = countsArr.sort((a,b) => a - b);
    const filteredArr = sortedArr.filter((curr,index, inputArr) => inputArr.indexOf(curr) == index);
    return filteredArr.length === 0 ? 0 : filteredArr.reduce((acc, curr) => acc + curr);
};

/**
 * If we list all the natural numbers below 10 that 
 * are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Finish the solution so that it returns the sum
    of all the multiples of 3 or 5 below the number passed in.

    Note: If the number is a multiple of both 3 and 5, only count it once. 
    Also, if a number is negative, return 0(for languages that do have them)

    Courtesy of projecteuler.net
    ALGORITHMSMATHEMATICSNUMBERS
 */
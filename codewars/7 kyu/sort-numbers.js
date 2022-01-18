const solution = (nums) => nums === null ? [] : nums.sort((a,b) => a - b);

/**
 * nil value then it should return an empty array.

    For example:

    solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
    solution(null); // should return []
    FUNDAMENTALS
 */
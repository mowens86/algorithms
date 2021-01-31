const solution = (string) => {
    // Variables needed
    const regex = /^[A-Z]*$/;
    const answer = [];
    // Split string to array
    const splitArr = string.split('');
    // Loop through array
    splitArr.map(index => {
        !regex.test(index) ? answer.push(index) : answer.push(` ${index}`);
        });

    // Return and join the array without commas
    return answer.join('');
};

/**
 * Complete the solution so that the function will break up camel casing, using a space between words.

    Example
    solution("camelCasing")  ==  "camel Casing"
    FUNDAMENTALSSTRINGSFORMATTINGALGORITHMS
 */

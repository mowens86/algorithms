const sumStr = (a,b) => {
    if (a === '') a = "0";
    if (b === '') b = "0";
    const intAnswer = parseInt(a) + parseInt(b);
    return intAnswer.toString();
  };

  /**
   * Description:
    Create a function that takes 2 nonnegative integers in form of
     a string as an input, and outputs the sum (also as a string):

    Example: (Input1, Input2 -->Output)

    "4",  "5" --> "9"
    "34", "5" --> "39"
    Notes:

    If either input is an empty string, consider it as zero.

    Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

    FUNDAMENTALS
   */
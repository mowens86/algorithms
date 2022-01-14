const explode = s => s.replace(/\d/g, d => d.repeat(d));

  /**
   * Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

    Examples
    explode("312"); // => "333122"
    explode("102269"); // => "12222666666999999999"
    FUNDAMENTALSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES
   */
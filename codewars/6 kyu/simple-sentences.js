const makeSentence = (parts) => {
    // Variables
    let sentence = '';
    // Loop through the parts
    const loop = parts.map((part, index) => {
      // Check if on last index of the loop
      index === parts.length - 1 
        // If on last index of loop add part with no space
        ? sentence += `${part}` 
        // If not last index of loop return part with a space for next word
        : sentence += `${part} `;
      });
    // Remove all periods and trim whitespace
    sentence = sentence.split('.').join('').trim();
    // Add period to end of sentence
    sentence = `${sentence}.`;
    // Replace spaced commas with just a comma and return
    return sentence.replace(/ ,/g, ',');
  };

  /**
   * Implement a function, so it will produce a sentence out of the given parts.

    Array of parts could contain:

    words;
    commas in the middle;
    multiple periods at the end.
    Sentence making rules:

    there must always be a space between words;
    there must not be a space between a comma and word on the left;
    there must always be one and only one period at the end of a sentence.
    Example:

    makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
    FUNDAMENTALSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES
   */
const arrayDiff = (a, b) => {
    // Variables
    const answer = [];
    a.forEach(num => {
      if (b.indexOf(num) === -1) answer.push(num);
    });
    return answer;
  };

  /**
   * Your goal in this kata is to implement a difference function,
   *  which subtracts one list from another and returns the result.

    It should remove all values from list a, which are present in list b.

    arrayDiff([1,2],[1]) == [2]
    If a value is present in b, all of its occurrences must be removed
    from the other:

    arrayDiff([1,2,2,2,3],[2]) == [1,3]
    FUNDAMENTALSARRAYS
   */
const well = (x) => {
    let goodCounter = 0;
    x.forEach(val => {
      if (val === 'good') {
        goodCounter++;
      }
    });
    if (goodCounter === 0) return 'Fail!';
    if (goodCounter > 0 && goodCounter <= 2) return 'Publish!';
    if (goodCounter > 2) return 'I smell a series!';
  };

  /**
   * For every good kata idea there seem to be quite a few bad ones!

    In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas
     'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return
      'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

    REFACTORINGFUNDAMENTALSARRAYSSTRINGS
   */
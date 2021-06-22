var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 15;
    let dogYears = 15;
    if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    };
    if (humanYears > 2) {
      const leftOverYears = humanYears - 2;
      catYears = 24 + (leftOverYears * 4);
      dogYears = 24 + (leftOverYears * 5);
    };
    return [humanYears,catYears,dogYears];
  };

  /**
   * I have a cat and a dog.

    I got them at the same time as kitten/puppy. That was humanYears years ago.

    Return their respective ages now as [humanYears,catYears,dogYears]

    NOTES:

    humanYears >= 1
    humanYears are whole numbers only
    Cat Years
    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that
    Dog Years
    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
    References

    http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
    http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
    If you liked this Kata there is another related one here

    FUNDAMENTALS
   */
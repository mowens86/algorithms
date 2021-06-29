const sc = (floor) => {
    if (floor <= 1) return "";
    let answerStr = '';
    let counter = 0;
    while (counter <= floor) {
      if (floor <= 6 && counter === floor) answerStr += "Aa!";
      if (floor <= 6 && counter === (floor - 1)) answerStr += "Pa! ";
      if (floor <= 6 && counter < (floor - 1)) answerStr += "Aa~ ";
      if (floor > 6 && counter === (floor - 1)) answerStr += "Pa!";
      if (floor > 6 && counter < (floor - 1)) answerStr += "Aa~ ";
      counter++;
    };
    return answerStr;
  };

  /**
   * Coding 3min : Jumping Dutch act

This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
Mr. despair wants to jump off Dutch act, So he came to the top of a building.

Scientific research shows that a man jumped from the top of the roof, when the floor more than 6, the person will often die in an instant; When the floor is less than or equal to 6, the person will not immediately die, he would scream. (without proof)

Input: floor, The height of the building (floor)

Output: a string, The voice of despair(When jumping Dutch act)

Example:
sc(2) should return "Aa~ Pa! Aa!"

It means:

Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

if floor<=1, Mr. despair is safe, return ""

The final advice
Just play in this kata, Don't experiment in real life ;-)

##Series:

Bug in Apple
Father and Son
Jumping Dutch act
Planting Trees
Give me the equation
Find the murderer
Reading a Book
Eat watermelon
Special factor
Guess the Hat
Symmetric Sort
Are they symmetrical?
Max Value
Trypophobia
Virus in Apple
Balance Attraction
Remove screws I
Remove screws II
Regular expression compression
Collatz Array(Split or merge)
Tidy up the room
Waiting for a Bus
PUZZLESGAMES
   */
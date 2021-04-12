const toTime = (seconds) => {
    // Variables needed
    let hours = 0, minutes = 0;
    let leftOverSeconds = seconds;
    
    // If seconds greather than 3600 (1 hour) then...
    if (seconds >= 3600) {
      // Get total number of hours and floor it
      hours = Math.floor(seconds / 3600);
      // Get the leftover seconds
      leftOverSeconds = seconds - (hours * 3600);
    }
    // If leftover seconds is greater than or equal ton 60 then get the leftover minutes and floor it
    if (leftOverSeconds >= 60) minutes = Math.floor(leftOverSeconds / 60);
    
    // Return template literal of hours and minutes
    return `${hours} hour(s) and ${minutes} minute(s)`;
  };

  /**
   * This Kata is intended as a small challenge for my students

    All Star Code Challenge #22

    Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

    Any remaining seconds left over are ignored.

    Note:
    The string output needs to be in the specific form - "X hour(s) and X minute(s)"

    For example:

    3600 --> "1 hour(s) and 0 minute(s)"
    3601 --> "1 hour(s) and 0 minute(s)"
    3500 --> "0 hour(s) and 58 minute(s)"
    23500 --> "89 hour(s) and 51 minute(s)"
    FUNDAMENTALS
   */
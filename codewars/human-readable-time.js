const humanReadable = (seconds) => {
    // Function to add zero if less than 10
    const addZero = (i) => i < 10 ? i = `0${i}` : i = i;
    // Variables
    const date = new Date(seconds * 1000);
    const hours = addZero(Math.floor(seconds/60/60));
    const minutes = addZero(date.getMinutes());
    const theSeconds = addZero(date.getSeconds());
    
    return `${hours}:${minutes}:${theSeconds}`;
  };

/**
 * Write a function, which takes a non-negative integer (seconds) as input 
 * and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

    You can find some examples in the test fixtures.

    ALGORITHMSDATES/TIMEMATHEMATICSNUMBERS
 */
const formatDuration = (seconds) => {
    // Check if only seconds
    if (seconds === 0) return `now`;
    if (seconds === 1) return `${seconds} second`;
    if (seconds > 1 && seconds < 60) return `${seconds} seconds`;
    
    // Variables
    let leftOverSeconds = seconds;
    let answerObj = {};
    
    // Years conditionals
    const years = leftOverSeconds / 60 / 60 / 24 / 365;
    if (Number.isInteger(years) && years === 1) answerObj.year = years;
    if (Number.isInteger(years) && years > 1) answerObj.years = years;
    
    if (years >= 1) {
      const yearsFloored = Math.floor(years);
      const secondsInYear = yearsFloored * 60 * 60 * 24 * 365;
      yearsFloored === 1 ? answerObj.year = yearsFloored : answerObj.years = yearsFloored;
      leftOverSeconds = leftOverSeconds - secondsInYear;
    }
    
    // Days conditionals
    const days = leftOverSeconds / 60 / 60 / 24;
    if (Number.isInteger(days) && days === 1) answerObj.day = days;
    if (Number.isInteger(days) && days > 1) answerObj.days = days;
    
    if (days >= 1 && days < 365) {
      const daysFloored = Math.floor(days);
      const secondsInDay = daysFloored * 60 * 60 * 24;
      daysFloored === 1 ? answerObj.day = daysFloored : answerObj.days = daysFloored;
      leftOverSeconds = leftOverSeconds - secondsInDay;
    }
    
    // Hours conditionals
    const hours = leftOverSeconds / 60 / 60;
    if (Number.isInteger(hours) && hours === 1) answerObj.hour = hours;
    if (Number.isInteger(hours) && hours > 1) answerObj.hours = hours;
    
    if (hours >= 1 && hours < 24) {
      const hoursFloored = Math.floor(hours);
      const secondsInHour = hoursFloored * 60 * 60;
      hoursFloored === 1 ? answerObj.hour = hoursFloored : answerObj.hours = hoursFloored;
      leftOverSeconds = leftOverSeconds - secondsInHour;
    }
    
    // Minutes conditionals
    const minutes = leftOverSeconds / 60;
    if (Number.isInteger(minutes) && minutes === 1) answerObj.minute = minutes;
    if (Number.isInteger(minutes) && minutes > 1) answerObj.minutes = minutes;
    
    if (minutes >= 1 && minutes < 60) {
      const minutesFloored = Math.floor(minutes);
      const secondsInMinute = minutesFloored * 60;
      minutesFloored === 1 ? answerObj.minute = minutesFloored : answerObj.minutes = minutesFloored;
      leftOverSeconds = leftOverSeconds - secondsInMinute;
    }
    
    // Add remaining second or seconds to answer object
    if (leftOverSeconds === 1) answerObj.second = leftOverSeconds;
    if (leftOverSeconds > 1) answerObj.seconds = leftOverSeconds;
    
    // Get length of answerObj
    const answerObjLength = Object.entries(answerObj).length;
    
    // Conditional answers based on answerObj length
    if (answerObjLength === 5) {
      const yearsString = `${Object.values(answerObj)[0]} ${Object.keys(answerObj)[0]}`;
      const daysString = `${Object.values(answerObj)[1]} ${Object.keys(answerObj)[1]}`;
      const hoursString = `${Object.values(answerObj)[2]} ${Object.keys(answerObj)[2]}`;
      const minutesString = `${Object.values(answerObj)[3]} ${Object.keys(answerObj)[3]}`;
      const secondsString = `${Object.values(answerObj)[4]} ${Object.keys(answerObj)[4]}`;
      return `${yearsString}, ${daysString}, ${hoursString}, ${minutesString} and ${secondsString}`;
    }
    
    if (answerObjLength === 4) {
      const firstString = `${Object.values(answerObj)[0]} ${Object.keys(answerObj)[0]}`;
      const secondString = `${Object.values(answerObj)[1]} ${Object.keys(answerObj)[1]}`;
      const thirdString = `${Object.values(answerObj)[2]} ${Object.keys(answerObj)[2]}`;
      const fourthString = `${Object.values(answerObj)[3]} ${Object.keys(answerObj)[3]}`;
      return `${firstString}, ${secondString}, ${thirdString} and ${fourthString}`;
    }
    
    if (answerObjLength === 3) {
      const firstString = `${Object.values(answerObj)[0]} ${Object.keys(answerObj)[0]}`;
      const secondString = `${Object.values(answerObj)[1]} ${Object.keys(answerObj)[1]}`;
      const thirdString = `${Object.values(answerObj)[2]} ${Object.keys(answerObj)[2]}`;
      return `${firstString}, ${secondString} and ${thirdString}`;
    }
    
     if (answerObjLength === 2) {
      const firstString = `${Object.values(answerObj)[0]} ${Object.keys(answerObj)[0]}`;
      const secondString = `${Object.values(answerObj)[1]} ${Object.keys(answerObj)[1]}`;
      return `${firstString} and ${secondString}`;
    }
    
    if (answerObjLength === 1) {
      const firstString = `${Object.values(answerObj)[0]} ${Object.keys(answerObj)[0]}`;
      return `${firstString}`;
    }
  };
  
  /**
   * Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

    The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

    It is much easier to understand with an example:

    formatDuration(62)    // returns "1 minute and 2 seconds"
    formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
    For the purpose of this Kata, a year is 365 days and a day is 24 hours.

    Note that spaces are important.

    Detailed rules
    The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is
    used in plural if the integer is greater than 1.

    The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

    A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

    Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

    A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

    A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by
    of a component must not be greater than any valid more significant unit of time.

    ALGORITHMSFORMATSSTRINGSDATES/TIMEFORMATTING
   */
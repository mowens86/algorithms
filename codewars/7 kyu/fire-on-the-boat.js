const fireFight = (s) => {
    // Regex
    const regex = /Fire/gi;
    // Return and replace all fire words with ~~
    return s.replace(regex, '~~');
};

/**
 * Enjoying your holiday, you head out on a scuba diving trip!

    Disaster!! The boat has caught fire!!

    You will be provided a string that lists many boat 
    related items. If any of these items are "Fire" you must
    spring into action. Change any instance of "Fire" into "~~". 
    Then return the string.

    Go to work!

    FUNDAMENTALSARRAYSSTRINGS
 * 
 */
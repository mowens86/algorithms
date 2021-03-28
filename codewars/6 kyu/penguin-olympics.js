const calculateWinners = (snapshot, penguins) => {
    // Variables
    let pFlag = false;
    const totalLeft = [];
    const filteredArr = snapshot.split('|').filter(index => index !== '' && index !== '\n    ' && index !== '\n');
  
    // Loop through filtered array
    filteredArr.forEach((value, index, arr) => {
      // Temp variables
      const arrLength = value.length - 1;
      const tempSplit = value.split('');
      let tempWaves = 0;
      let tempStrokes = 0;
      
      // Loop through tempSplit array
      tempSplit.forEach((val, ind) => {
        // Conditionals
        if (val == 'p' || val == 'P') pFlag = true;
        if (pFlag && val === '~') tempWaves += 2;
        if (pFlag && val === '-') tempStrokes++;
        if (ind === arrLength) {
          totalLeft.push(tempWaves + tempStrokes);
          pFlag = false;
        };
      })
    });
    
    // Create key value pairs with strokes and names
    const strokesAndNames = {};
    penguins.forEach((peng, ind) => {
      const strokesLeft = totalLeft[ind];
      strokesAndNames[strokesLeft] = peng;
    });
    
    // Sort the strokesAndNames object by key
    const sorted = Object.keys(strokesAndNames).sort().reduce(
      (obj, key) => {
        obj[key] = strokesAndNames[key];
        return obj;
      },
      {}
    );
    
    // Loop through sorted object
    let answer = '';
    let medalCount = 0;
    for (const [key, value] of Object.entries(sorted)) {
      // Conditionals
      medalCount++;
      if (medalCount === 1) answer += `GOLD: ${value}, `;
      if (medalCount === 2) answer += `SILVER: ${value}, `;
      if (medalCount === 3) answer += `BRONZE: ${value}`;
    };
    return answer;
  };

  /**
   * The situation...

    The fastest penguins in the world have just swum for the ultimate prize in
    professional penguin swimming.
    The cameras that were capturing the race stopped recording half way through.
    The athletes, and the fans are in disarray waiting for the results.
    The challenge...

    Given the last recorded frame of the race, and an array of penguin athletes,
    work out the gold, silver and bronze medal positions.

    The rules...

    Assume all penguins swim at the same speed.
    Waves (~) take twice as long to swim through as smooth water (-).
    Penguins (p or P) are racing from left to right.
    There can be any number of lanes, and the race can be any length.
    All Lanes in a single race will be the same length.
    Penguin names are in the same order as the lanes.
    Return a string in this format: "GOLD: <name-1>, SILVER: <name-2>, BRONZE: <name-3>"
    There will always be an equal amount of penguins and lanes.
    There will always be a top three (no draws).
    Examples...

    Snapshot:
    |----p---~---------|
    |----p---~~--------|
    |----p---~~~-------|

    Penguins:
    ["Derek", "Francis", "Bob"]

    Expected Output:
    "GOLD: Derek, SILVER: Francis, BRONZE: Bob"
    Snapshot:
    |-~~------------~--P-------|
    |~~--~P------------~-------|
    |--------~-P---------------|
    |--------~-P----~~~--------|

    Penguins:
    ["Joline", "Abigail", "Jane", "Gerry"]

    Expected Output:
    "GOLD: Joline, SILVER: Jane, BRONZE: Gerry"
    PUZZLES
   */
const separateLiquids = (glass) => {
    // Check length of glass is 0 and return empty array
    if (glass.length === 0) return [];
  
    // Concatenate all 2d portions of array
    const concatenatedArr = [].concat.apply([], glass);
    
    // Filter out each type of liquid
    const oilArr = concatenatedArr.filter(el => {if (el === 'O') return 'O' });
    const alcoArr = concatenatedArr.filter(el => {if (el === 'A') return 'A' });
    const waterArr = concatenatedArr.filter(el => {if (el === 'W') return 'W' });
    const honeyArr = concatenatedArr.filter(el => {if (el === 'H') return 'H' });
    
    // Join and remove empty filtered arrays
    const filteredOrderedArr = [[...oilArr], [...alcoArr], [...waterArr], [...honeyArr]].filter(el => el != null && el != '');
    // Concat the filteredOrderedArray
    const orderedConcatArr = [].concat.apply([], filteredOrderedArr);
    
    // Function to chunk array
    const chunkArray = (myArray, chunkSize) => {
      let index = 0;
      let arrayLength = myArray.length;
      let chunkedArr = [];
      
      for (index = 0; index < arrayLength; index += chunkSize) {
        const myChunk = myArray.slice(index, index + chunkSize)
        chunkedArr.push(myChunk);
      }
      return chunkedArr;
    };
    // Use function to chunk array and return result
    const result = chunkArray(orderedConcatArr, glass[0].length);
    return result;
  };

  /**
   * Don't Drink the Water

    Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their
    density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

    ======================
    |   Density Chart    |
    ======================
    | Honey   | H | 1.36 |
    | Water   | W | 1.00 |
    | Alcohol | A | 0.87 |
    | Oil     | O | 0.80 |
    ----------------------

    [                            [
    ['H', 'H', 'W', 'O'],        ['O','O','O','O']
    ['W', 'W', 'O', 'W'],  =>    ['W','W','W','W']
    ['H', 'H', 'O', 'O']         ['H','H','H','H']
    ]                           ]
    
    The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

    ALGORITHMSARRAYSSORTINGLISTSDATA STRUCTURES
   */
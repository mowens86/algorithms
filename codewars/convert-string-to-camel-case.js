const toCamelCase = (str) => {
    // Check if empty string and if so return an empty string
   if (str === '') return '';
   // Check if there are any -'s in the string'
   if (str.indexOf('-') !== -1) {
     // Split the str at the dash and turn into an array
     const splitArr = str.split('-')
                 // Map through the array and if the index is not 0 then capitalize the first letter of every word
                 .map((curr, index, arr) => index !== 0 ? curr[0].toUpperCase() + curr.substring(1) : curr)
                 // Join all of indexes of the array into a string
                 .join('');
     // Return the array as a string
     return splitArr;
   }
   
   // Check if there are any _'s in the string'
   if (str.indexOf('_') !== -1) {
     // Split the str at the underscore and turn into an array
     const splitArr = str.split('_')
                     // Map through the array and if the index is not 0 then capitalize the first letter of every word
                     .map((curr, index, arr) => index !== 0 ? curr[0].toUpperCase() + curr.substring(1) : curr)
                     // Join all of indexes of the array into a string
                     .join('');
     // Return the array as a string
     return splitArr;
   }
 };

 /**
  * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within
  *  the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

    Examples
    "the-stealth-warrior" gets converted to "theStealthWarrior"
    "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

    ALGORITHMSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURESFUNDAMENTALSSTRINGS
  */
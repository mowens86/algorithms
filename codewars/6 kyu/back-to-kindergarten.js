const parseKidList = ( csv ) => {
  
    // Variables
    const answerArr = [];
    
    // Split string by \n new line break
    const splitArr = csv.split('\n');
    
    // Loop through each element string
    const mappedArr = splitArr.map((curr, index) => {
      
      // Split current portion of string by commas
      const splitByComma = curr.split(','); 
      
      // Swap index 2 with 1 for order
      [splitByComma[1], splitByComma[2]] = [splitByComma[2], splitByComma[1]]
      
      // Uppercase name
      const upperCaseName = splitByComma[0].toUpperCase();
      
      // Uppercase gender and rap in parantheses
      const genderUpperCase = `(${splitByComma[1].toUpperCase()})`;
      
      // Format date and add zeros
      const splitDate = splitByComma[2].split('/');
        // Loop through splitDate
        const addZeros = splitDate.map(val => {
          return val.length === 1 ? `0${val}` : val;
        });
        
      // Join array into string with zeroes
      const datedFormat = addZeros.join('/');
        
      // Converted string
      const convertedString = `${upperCaseName} ${genderUpperCase} ${datedFormat}`;
      
      // Push correctly converted string into answerArr
      answerArr.push(convertedString);
    });
    return answerArr;
  };
  
  const sortByNames = ( kids ) => {
    return kids.sort();
  };
  

  /**
   * Odile is back to kindergarten . . . as a teacher !

    For now, she got a list, the list of kids she'll have to take care pretty soon.

    This list has a form of a csv (comma-separated-values) list, with records separated by a newline ( "\n" ). Each record in this list representing
    a kid on the form "Name,DateOfBirth,Gender" :

    Name being the name ( :) ) of a kid.
    DateOfBirth in the form d/m/yyyy with :
    day of the month on 1 or 2 digits,
    month on 1 or 2 digits,
    and year on 4 digits.
    ...gender as a single character : m or f (male/female).
    Odile would like to print this list in a prettier form. She would first parse this list to get a more useful one, and then ask another function
    to obtain a sorted and pretty-formatted list.

    #Task

    You should create 2 functions : parseKidList and sortByNames.

    parseKidList( csv ) : receives the "csv-string-list" of kids and may return whatever-you want The return value of this function will be stored in
    a variable and this variable will be pass to second function. parseKidList may for example return an array of kid-objects, or kid-strings or even
    return the unchanged csv argument. The return value of this function will not be "directly" tested !
    sortByNames( kids ) : receives as argument the "thing" obtained with previous function and should return an array of "kid-strings", sorted in ascending
    order by names of kids. A "kid-string" should be of the form NAME (M) dd/mm/yyyy or NAME (F) dd/mm/yyyy, ie :
    Name of kid in uppercase,
    Gender (M or F) in uppercase and in parenthesis,
    ...and Date of birth in dd/mm/yyyy format ( dd or mm meaning 2 digits for day or month)
    ##Example:

    var kids = parseKidList( ["Zack,2/12/2013,m\nAlya,1/1/2012,f"] );

    sortByNames( kids )
    // -> should return :
    // [ "ALYA (F) 01/01/2012", "ZACK (M) 02/12/2013"]
    You may assume all names will be unique in each tests.

    So, go to work kids ! I 'm sure that all of you want to please Odile.

    FUNDAMENTALSSTRINGSARRAYS
   */
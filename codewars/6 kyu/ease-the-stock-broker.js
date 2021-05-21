const balanceStatements = (list) => {

    if (list === '') return `Buy: 0 Sell: 0`;
    // Object to hold everything
    const answerObj = {
      Buy: [],
      Sell: [],
      Bad: []
    };
    const splitStocks = list.split(', ');
    
    
    
    const mappedStocks = splitStocks.map(stock => {
      const splitStock = stock.split(' ');
      const quantity = Number(splitStock[1]);
      const price = Number(splitStock[2]);
      const buyOrSell = splitStock[3];
      const quantityCheck = splitStock[1].indexOf('.');
      const priceCheck = splitStock[2].indexOf('.');
      
      if (quantityCheck !== -1 
          || priceCheck === -1 
          || (buyOrSell !== 'B' && buyOrSell !== 'S')) answerObj.Bad.push(`${stock} ;`);
      
      if ((quantityCheck === -1 && buyOrSell === 'B') 
          && (priceCheck !== -1 && buyOrSell === 'B'))
          answerObj.Buy.push(Math.round(quantity * price));
      
      if ((quantityCheck === -1 && buyOrSell === 'S') 
          && (priceCheck !== -1 && buyOrSell === 'S')) 
          answerObj.Sell.push(Math.round(quantity * price));
    })
    
    let sumOfBuys;
    let sumOfSells;
    
     answerObj.Buy.length === 0 
       ? sumOfBuys = 0 
       : sumOfBuys = answerObj.Buy.reduce((acc, val) => acc + val);
    
     answerObj.Sell.length === 0 
       ? sumOfSells = 0 
       : sumOfSells = answerObj.Sell.reduce((acc, val) => acc + val);
     
    return answerObj.Bad.length === 0 
      ? `Buy: ${sumOfBuys.toString()} Sell: ${sumOfSells.toString()}`
      : `Buy: ${sumOfBuys.toString()} Sell: ${sumOfSells.toString()}; Badly formed ${answerObj.Bad.length}: ${answerObj.Bad.join('')}`;
  
  };

  /**
   * Clients place orders to a stockbroker as strings. The order can be simple or multiple or empty.

    Type of a simple order: Quote/white-space/Quantity/white-space/Price/white-space/Status

    where Quote is formed of non-whitespace character, Quantity is an int, Price a double (with mandatory decimal point "." ), Status is represented by the letter B (buy) or the letter S (sell).

    Example:
    "GOOG 300 542.0 B"

    A multiple order is the concatenation of simple orders with a comma between each.

    Example:
    "ZNGA 1300 2.66 B, CLH15.NYM 50 56.32 B, OWW 1000 11.623 B, OGG 20 580.1 B"

    or

    "ZNGA 1300 2.66 B,CLH15.NYM 50 56.32 B,OWW 1000 11.623 B,OGG 20 580.1 B"

    To ease the stockbroker your task is to produce a string of type

    "Buy: b Sell: s" where b and s are 'double' formatted with no decimal, b representing the total price of bought stocks and s the total price of sold stocks.

    Example:
    "Buy: 294990 Sell: 0"

    Unfortunately sometimes clients make mistakes. When you find mistakes in orders, you must pinpoint these badly formed orders and produce a string of type:

    "Buy: b Sell: s; Badly formed nb: badly-formed 1st simple order ;badly-formed nth simple order ;"

    where nb is the number of badly formed simple orders, b representing the total price of bought stocks with correct simple order and s the total price of sold stocks with correct simple order.

    Examples:
    "Buy: 263 Sell: 11802; Badly formed 2: CLH16.NYM 50 56 S ;OWW 1000 11 S ;"

    "Buy: 100 Sell: 56041; Badly formed 1: ZNGA 1300 2.66 ;"

    Notes:
    If the order is empty "Buy is 0 and Sell is 0".
    Due to Codewars whitespace differences will not always show up in test results.
    With Golang (and maybe others) you can use a format with "%.0f" for "Buy" and "Sell".
    FUNDAMENTALSSTRINGS
   */
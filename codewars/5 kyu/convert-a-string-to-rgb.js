const hexStringToRGB = (hexString) => {
    const rgbArr = hexString.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
               ,(m, r, g, b) => '#' + r + r + g + g + b + b)
              .substring(1).match(/.{2}/g)
              .map(x => parseInt(x, 16));
    
    const rbgObj = {
      r: rgbArr[0],
      g: rgbArr[1],
      b: rgbArr[2]
    }
    
    return rbgObj;
  };

  /**
   * When working with color values it can sometimes be useful to extract the individual red, green,
   *  and blue (RGB) component values for a color. Implement a function that meets these requirements:

    Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
    Returns an object with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
    Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

    Example
    "#FF9933" --> {r: 255, g: 153, b: 51}
    ALGORITHMSPARSINGSTRINGS
   */
const playPass = (s, n) => {
    const splitStr = s.split('');
    
    const shiftedOne = splitStr.map((letter, index) => {
      
      if (s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90) {
        return s.charCodeAt(index) + n > 90 
          ? String.fromCharCode((s.charCodeAt(index) + n) - 26) 
          : String.fromCharCode(s.charCodeAt(index) + n);
      };
      
      if (s.charCodeAt(index) === 32
       || s.charCodeAt(index) === 33
       || s.charCodeAt(index) === 46
       || s.charCodeAt(index) === 39
       || s.charCodeAt(index) === 63
       || s.charCodeAt(index) === 41
       || s.charCodeAt(index) === 45
       || s.charCodeAt(index) === 58
       || s.charCodeAt(index) === 40
       || s.charCodeAt(index) === 44) return String.fromCharCode(s.charCodeAt(index));
      
      if (typeof parseInt(letter) === 'number') return parseInt((9 - letter));
      });
    
    const downCasing = shiftedOne.map((letter, index) => {
      if (typeof letter === 'string') return index % 2 === 1 ? letter.toLowerCase() : letter;
      if (typeof letter === 'number') return letter;
    });
    
    return downCasing.reverse().join('');
  };

  /**
   * Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so
   *  on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase

ALGORITHMSCHARSSTRINGSENCODING
   */
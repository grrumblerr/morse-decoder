const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  var symbols = expr.match(/.{10}/g);
  let result = [];
  for (let i=0; i<symbols.length; i++) {
       if (symbols[i] == '**********') result.push(' ');
      result.push(MORSE_TABLE[symbols[i].replace(/^0+/g, '').replace(/10/g, '.').replace(/11/g, '-')]);
  }
  // console.log(symbols);
  // console.log(result);
  return result.join('');
}

// console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"))


module.exports = {
    decode
}
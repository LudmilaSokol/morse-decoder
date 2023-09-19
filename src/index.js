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
    // write your solution here
    let result = '';
    let binaryLetter;
    let b, letter;
    let modifedExpr = expr;
    let codeMorze = '';
    do {
        binaryLetter = modifedExpr.slice(0, 10);
        if (binaryLetter !== '**********'){
            codeMorze = '';
            do {
                b=binaryLetter.slice(0, 2);
                binaryLetter = binaryLetter.slice (2);
                if (b === '11') {
                    codeMorze = codeMorze + '-';
                } else if (b === '10') {
                    codeMorze = codeMorze + '.';
                }
            } while (binaryLetter >= 2)
            letter = MORSE_TABLE[codeMorze];
            result = result + letter;
        } else {
            result = result + ' ';
        }
        modifedExpr = modifedExpr.slice(10);
    } while (modifedExpr.length >= 10);

    return result;
}

module.exports = {
    decode
}
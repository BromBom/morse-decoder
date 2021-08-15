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
    let strWords = (expr).toString();
    let arr5Letter = [];
    let arr2Char = [];
    let stringChar = '';
    let strDecod = '';

    for (let i = 0; i < strWords.length; i += 2) {
        arr2Char.push(strWords.slice(i, i + 2).toString())
    }

    //return console.log(arr2Char)
    for (let i = 0; i < arr2Char.length; i++) {

            if (arr2Char[i] === '**') {
                stringChar += '*';
            }
            else if (arr2Char[i] === '00') {
                stringChar += ' ';
            }
            else if (arr2Char[i] === '11') {
                stringChar += '-';
            }
            else if (arr2Char[i] === '10') {
                stringChar += '.';
            }
    }
    //return console.log(stringChar)

    for (let i = 0; i < stringChar.length; i += 5) {
        arr5Letter.push(stringChar.slice(i, i + 5).toString().trim())
    }

    //return console.log(arr5Letter)
    for (let i = 0; i < arr5Letter.length; i++) {
            if (arr5Letter[i] === '*****') {
                strDecod += ' ';
            }
            else {
                strDecod += (MORSE_TABLE[arr5Letter[i]]).toString();
            }
    }

    return strDecod;
}


module.exports = {
    decode
}
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
    let decodedExpr = '';
    let newExpr, newExprTwo, newLetter;

    expr = expr.split('**********');
    for (let i = 0; i < expr.length; i++) {
        newExpr = expr[i].match(/.{1,10}/g);
        let word = '';
        for (let j = 0; j < newExpr.length; j++) {
            newExprTwo = newExpr[j].match(/.{1,2}/g)/*.reverse()*/;
            let codeLetter = '';
            for (let y = 0; y < newExprTwo.length; y++) {
                if (newExprTwo[y] === '10') codeLetter  = `${codeLetter}.`;
                if (newExprTwo[y] === '11') codeLetter  = `${codeLetter}-`;
            }
            newLetter = MORSE_TABLE[codeLetter];
            word = `${word}${newLetter}`;
        }
        decodedExpr = `${decodedExpr}${word} `;
    }

    return decodedExpr.substring(0, decodedExpr.length - 1);
}

module.exports = {
    decode
}

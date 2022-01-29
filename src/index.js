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
    let arr = []
    let result = ''
    for (let i = 0; i < expr.length; i = i + 10) {
        if (expr[i] === '*') {
            arr.push(' ')
            continue
        }
        arr.push(strCorrect(strTrim(expr.slice(i, i + 10))))
    }
    for (let el of arr) {
        if (el === ' ') {
            result += ' '
        }
        else {
            result += MORSE_TABLE[el]
        }
    }
    return result
}

function strTrim(str) {
    for (let i = 0; i < 10; i++) {
        if (str[i] !== '0') {
            return str.slice(i)
        }
    }
}

function strCorrect(str) {
    let temp = ''
    for (let i = 0; i < str.length; i = i + 2) {
        str[i + 1] === '0' ? temp += '.' : temp += '-'
    }
    return temp
}

module.exports = {
    decode
}
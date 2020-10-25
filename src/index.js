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

function decode(message) {
    let morse_table = new Map(Object.entries(MORSE_TABLE));

    let result = message.match(/[0-1*]{10}/g).map(item => 
        item.match(/[0-1*]{2}/g).reduce((letter, item) => {
            switch (item) {
                case "00":
                    return letter;
                case "10":
                    return letter + ".";
                case "11":
                    return letter + "-";
                default:
                    return letter + " ";
            }
        }, "")
    );
    
    return result.map(item => morse_table.get(item) || " " ).join("");
 }

module.exports = {
    decode
}
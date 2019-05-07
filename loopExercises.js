function printNumbers(start,end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
//printNumbers(2,8);

function printSquare(side) {
    const asterisk = '*';
    for (let i = 1; i <= side; i++) {
        console.log(asterisk.repeat(side));
    }
}
//printSquare(4)

function printBox(width, height) {
    const boxCenter = "*" + " ".repeat(width-2) + "*";
    const boxEdge = "*".repeat(width);
    console.log(boxEdge);
    for (let i = 1; i <= height-2; i++) {
        console.log(boxCenter);
    }
    console.log(boxEdge);
}
//printBox(6,4);

function printBanner(text) {
    const textLen = text.length;
    const boxEdge = "*".repeat(textLen + 2);
    console.log(boxEdge);
    console.log("*" + text + "*");
    console.log(boxEdge);
}
//printBanner("javaScript is reallyNeat!");

function factors(num) {
    let numFactors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
        numFactors.push(i);
        }
    }
    console.log(numFactors);
}
//factors(1200);

function cipher(text) {
    console.log(text);
    let newText = "";
    for (i = 0; i < text.length; i++) {
        let asciiVal = text[i].charCodeAt(0);
        if (asciiVal >=65 && asciiVal <= 77) {
        asciiVal += 13;
        }
        else if (asciiVal >= 78 && asciiVal <= 90) {
        asciiVal = 64 + 13 - (90 - asciiVal);
        }   
        else if (asciiVal >= 97 && asciiVal <= 109) {
        asciiVal += 13;
        }
        else if (asciiVal >= 110 && asciiVal <= 122) {
        asciiVal = 96 + 13 - (122 - asciiVal);
    }
    newText = newText + String.fromCharCode(asciiVal)
    }
    console.log(newText);
}
//cipher("abcdefghijklmnopqrstuvwxyz")

function decipher(text, offset) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        let asciiVal = text[i].charCodeAt(0);
        if (asciiVal >=65 && asciiVal < (65 + offset)) {
        asciiVal = 90 - (65 - offset - asciiVal)
    }
        else if (asciiVal >= (65 + offset) && asciiVal <= 90) {
        asciiVal -= offset
    }
        else if (asciiVal >= 97 && asciiVal < (97 + offset)) {
        //asciiVal += 13;
    }
        else if (asciiVal >= 110 && asciiVal <= 122) {
        //asciiVal = 96 + 13 - (122 - asciiVal);
        }

    
        newText = newText + String.fromCharCode(asciiVal);
    }
    console.log(newText);
}
//decipher("abcdefghijklmnopqrstuvwxyz", 13);

function ticTacToe(game) {
    const markers = ['O', 'X'];
    //check cross each row first
    for (let row = 0; row <= 2; row++) {
        if (game[row][0] === game[row][1] && game[row][0] === game[row][2]) {
        console.log(`${game[row][0]} matched at row${row}!`);
        }
    }
    //check down each column
    for (let column = 0; column <= 2; column++) {
        if (game[0][column] === game[1][column] && game[0][column] === game[2][column]) {
        console.log(`${game[0][column]} matched at column${column}!`);
        }
    }
    //check for diagonal matches
    if (game[1][1] === game[0][0] && game[1][1] === game[2][2]) {
        console.log(`${game[1][1]} matched diagonally from top left to bottom right!`);
    }
    if (game[1][1] === game[0][2] && game[1][1] === game[2][0]) {
        console.log(`${game[1][1]} matched diagonally from top right to bottom left!`);
    }
    
}
/*ticTacToe([['O','O','X'],
            [null,'O',null],
            ['O',null,'O']])
*/
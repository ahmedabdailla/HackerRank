//Link = https://www.hackerrank.com/challenges/handshake/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the handshake function below.
 */
function handshake(n) {
    
    let result = 0;

    //5, 1 hands 2,3,4,5. 2 hands 3,4,5. 3 hands 4,5. 4 hands 5. 10
    //4, 1 hands 2,3,4. 2 hands 3,4. 3 hands 4. 6
    //3, 1 hands 2,3. 2 hands 3. 3
    //2, 1 hands 2, 1
    //1, 0

    // Here's who we make the function above a math function. everytime we add the value we remove one from the N's. 
    for(var i=n;i>1;i--){
        n--;
        result += n;
    }

    /*2 = 1
    3 = 3 (2)
    4 = 6 (3)*/

    
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = handshake(n);

        ws.write(result + "\n");
    }

    ws.end();
}

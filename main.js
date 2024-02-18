// Whale Talk

var input = 'turpentine is for quiet';

console.log(input);

var inputArray = Array.from(input);

console.log(inputArray);

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray =[];

for (let icount = 0; icount < inputArray.length; icount++) {
    const inputLetter = inputArray[icount];
    console.log(inputLetter);

    if (inputLetter === 'e') {
        resultArray.push(inputLetter);
    }

    if (inputLetter === 'u') {
        resultArray.push(inputLetter);

        console.log(resultArray);}

    for (let jcount = 0; jcount < vowels.length;  jcount++) {
        const vowelIteration = vowels[jcount];
        // console.log('  ', vowelIteration);

        if (inputLetter === vowelIteration) {
            resultArray.push(vowelIteration);
            console.log(resultArray);
        }

        }

        // console.log(resultArray);
    }
console.log(resultArray);

var whaleSong = resultArray.join();

console.log(whaleSong.toUpperCase());

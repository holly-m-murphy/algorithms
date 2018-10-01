/* Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? */

function isUnique(someWord) {
    for (let x = 0; x < someWord.length; x++) {
        let testArr = [...someWord].filter(letter => {
            return letter === someWord[x];
        })

        if (testArr.length > 1) {
            return false;
        }
    }
    return true;
}

function isUniqueVersionTwo(someWord) {
    const charArr = [];
    for (let x = 0; x < someWord.length; x++) {
        if (charArr.indexOf(someWord[x]) >= 0) {
            return false;
        }
        charArr.push(someWord[x]);
    }
    return true;
}

// false
let result = isUnique('text');
console.log(`test result: `, result);
let resultTwo = isUniqueVersionTwo('text');
console.log(`testTwo result: `, resultTwo);

// true
result = isUnique('what');
console.log(`what result: `, result);
resultTwo = isUniqueVersionTwo('what');
console.log(`whatTwo result: `, resultTwo);

// false
result = isUnique('holly');
console.log(`holly result: `, result)
resultTwo = isUniqueVersionTwo('holly');
console.log(`hollyTwo result: `, resultTwo);

// false
result = isUnique('bob');
console.log(`bob result: `, result)
resultTwo = isUniqueVersionTwo('bob');
console.log(`bobTwo result: `, resultTwo);

// true
result = isUnique('something');
console.log(`something result: `, result)
resultTwo = isUniqueVersionTwo('something');
console.log(`somethingTwo result: `, resultTwo);
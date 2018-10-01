/* Given two strings, write a method to decide if one is a permutation of the other */

function isPermutation(wordOne, wordTwo) {
    if (wordOne.length !== wordTwo.length) {
        return false;
    }

    for (let x = 0; x < wordOne.length; x++) {
        if (wordTwo.indexOf(wordOne[x]) < 0) {
            return false;
        }
    }
    for (let x = 0; x < wordTwo.length; x++) {
        if (wordOne.indexOf(wordTwo[x]) < 0) {
            return false;
        }
    }

    return true;
}

// true
console.log(`cook, kooc:true `, isPermutation('cook', 'kooc'))
// false
console.log(`why, ok:false `, isPermutation('why', 'ok'))
// false
console.log(`test, bool:false `, isPermutation('test', 'bool'))
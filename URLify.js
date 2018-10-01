/* Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (*Note: If implementing in Java, please use a character array so that you can perform this operation in place.) */

function urlify(someString) {
    const result = [...someString].map(letter => {
        if (letter === " ") {
            return "%20"
        } else {
            return letter
        }
    })
    return result.join('')
}

console.log(`lisa%20is%20cool! `, urlify('lisa is cool'))
console.log(`john%20is%20cool!`, urlify('john is cool'))
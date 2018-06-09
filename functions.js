'use strict'

const myFunctions = {}

myFunctions.isNumber = number => {
    return typeof(number)
}

myFunctions.isVowel = item => {
    return ['a', 'e', 'i', 'o', 'u']
        .filter(vocal => vocal == item).length <= 0 ? false : true
}

module.exports = myFunctions
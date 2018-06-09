'use strict'

const _function = require('../functions')

test('isNumber', () => {
    expect(_function.isNumber(2)).toEqual('number')
})

test('isVocal', () => {
    expect(_function.isVowel('a')).toEqual(true)
})
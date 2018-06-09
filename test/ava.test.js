'use strict'

const ava = require('ava')
const _function = require('../functions')

ava('isNumber', t => {
	t.deepEqual(_function.isNumber(2), 'number')
})

ava('isVowel', t => {
	t.deepEqual(_function.isVowel('a'), true)
})
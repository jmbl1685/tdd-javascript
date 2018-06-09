'use strict'

const chai = require('chai')
const _function = require('../functions')

describe('Unit tests using Mocha', () => {

  it('isNumber', () => {
    chai.expect(_function.isNumber(2)).to.equal('number')
  })

  it('isVowel', () => {
    chai.expect(_function.isVowel('a')).to.equal(true)
  })

})
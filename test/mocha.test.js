'use strict'

const chai = require('chai')
const server = require('../server/server')
const _function = require('../functions')

const chaiHttp = require('chai-http')
chai.use(chaiHttp)

let should = chai.should()

describe('Unit tests using Mocha', () => {

  it('isNumber and isVowel', () => {

    chai.request(server)
      .post('/mytest')
      .send({ number: 5, vowel: 'a'})
      .end((err,res) => {
        const { number, vowel } = res.body
        chai.expect(_function.isNumber(number)).to.equal('number')
        chai.expect(_function.isVowel(vowel)).to.equal(true)
        res.should.have.status(200)    
    })

  })

})

# Unit test examples in Javascript

## Used modules

- <a href="https://github.com/mochajs/mocha">Mocha</a> + <a href="https://github.com/chaijs/chai">Chai</a> (I like this.)
- <a href="https://github.com/avajs/ava">AVA</a>
- <a href="https://github.com/facebook/jest">Jest</a> 

## Usage

```sh
  npm install
  npm run test:mocha
  npm run test:ava
  npm run test:jest   
```

### Functions Examples

```js
const myFunctions = {}

myFunctions.isNumber = number => {
    return typeof(number)
}

myFunctions.isVowel = item => {
    return ['a', 'e', 'i', 'o', 'u']
        .filter(vocal => vocal == item).length <= 0 ? false : true
}
```

[Test] Mocha + Chai

```js
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
```

[Test] Jest

```js
'use strict'

const _function = require('../functions')

test('isNumber', () => {
    expect(_function.isNumber(2)).toEqual('number')
})

test('isVocal', () => {
    expect(_function.isVowel('a')).toEqual(true)
})
```

[Test] AVA

```js
'use strict'

const ava = require('ava')
const _function = require('../functions')

ava('isNumber', t => {
   t.deepEqual(_function.isNumber(2), 'number')
})

ava('isVowel', t => {
   t.deepEqual(_function.isVowel('a'), true)
})
```

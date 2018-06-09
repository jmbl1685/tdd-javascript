
# Unit test examples in Javascript

## Used modules

- <a href="https://github.com/mochajs/mocha">Mocha</a> 
- <a href="https://github.com/chaijs/chai">Chai</a> 
- <a href="https://github.com/avajs/ava">AVA</a>
- <a href="https://github.com/facebook/jest">Jest</a> 

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

[Test] Mocha + Chair

```js
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

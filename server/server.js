'use strict'

const express = require('express')
const app = express()

app.use(express.json())

app.post('/mytest', (req, res) => {

    const { number, vowel } = req.body

    if (number === undefined || vowel === undefined)
        return res.status(404).send({ error: 'missing fields [required]' })

    return res.status(200).send({ number, vowel })
})

app.listen(3000, () => {
    console.log('Server running')
})

module.exports = app

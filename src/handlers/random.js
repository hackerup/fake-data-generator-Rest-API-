const express = require('express')
const randomRouter = express.Router()
const { generator } = require('./utils')
const faker = require('faker')
// baseurl = /api/random/

// api/random/number
randomRouter.get('/number/:count?', (request, response) => {
    const numbers = generator(request.params.count, faker.random.number)
    response.json({
        numbers
    })
})

randomRouter.get('/alpha/:count?', (request, response) => {
    const alpha = generator(request.params.count,
        faker.random.alpha)
    response.json({
        alpha
    })
})
randomRouter.get('/alphaNumeric/:count?', (request, response) => {
    const alphaNumerics = generator(request.params.count,
        faker.random.alphaNumeric)
    response.json({
        alphaNumerics
    })
})

module.exports = {
    randomRouter
}
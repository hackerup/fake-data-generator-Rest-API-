const express = require('express')
const internetRouter = express.Router()
const { generator } = require('./utils')
const faker = require('faker')
const { internet } = require('faker')
// baseurl = /api/internet/

// api/internet/avtar
internetRouter.get('/avatar/:count?', (request, response) => {
    const avtars = generator(request.params.count,
        internet.avatar)
    response.json({
        avtars
    })
})


// api/internet/avtar
internetRouter.get('/email/:count?', (request, response) => {
    const emails = generator(request.params.count,
        internet.email)
    response.json({
        emails: emails
    })
})


module.exports = {
    internetRouter
}
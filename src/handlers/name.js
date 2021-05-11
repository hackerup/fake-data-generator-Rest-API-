const express = require('express')
const nameRouter = express.Router()
const faker = require('faker')
const { generator } = require('./utils')
// baseurl = /api/name/



nameRouter.get('/firstname/:count?', (request, response) => {
    const firstNames = generator(request.params.count, faker.name.firstName)

    response.json({
        firstNames
    })
})

nameRouter.get('/lastname/:count?', (request, response) => {
    const lastNames = generator(request.params.count, faker.name.lastName)
    response.json({
        lastNames
    })
})

nameRouter.get('/gender/:count?', (request, response) => {

    const genders = generator(request.params.count, faker.name.gender)

    response.json({
        genders: genders
    })
})

module.exports = {
    nameRouter
}
const express = require('express')
const todoValidator = require('./users.validator')
const validator = require('../../middleware/validator')
const users = require('./users.controller')

const router = express.Router()

router.post('/signin', validator(todoValidator.signIn), users.signIn)

router.post('/signup', validator(todoValidator.signUp), users.signUp)

module.exports = router

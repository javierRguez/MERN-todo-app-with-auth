const express = require('express')
// const auth = require('../middleware/auth')
const todos = require('./todos/todos.router')
const users = require('./users/users.router')

const router = express.Router()
router.use('/api/todos', todos)
router.use('/api/users', users)

module.exports = router

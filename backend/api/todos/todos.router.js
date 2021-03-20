/* eslint-disable consistent-return */
const express = require('express')
const todoValidator = require('./todos.validator')
const validator = require('../../middleware/validator')
const todos = require('./todos.controller')

const router = express.Router()

router.get('/', validator(todoValidator.read), todos.read)

router.post('/', validator(todoValidator.create), todos.create)

router.put('/:id', validator(todoValidator.update), todos.update)

router.patch(
  '/:id',
  validator(todoValidator.partiallyUpdate),
  todos.partiallyUpdate
)

router.delete('/:id', validator(todoValidator.remove), todos.remove)

module.exports = router

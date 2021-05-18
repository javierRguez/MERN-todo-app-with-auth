const Joi = require('joi')

const SCHEMA = Joi.object().keys({
  name: Joi.string().min(3).max(200).required(),
  author: Joi.string().min(3).max(30),
  uid: Joi.string(),
  isComplete: Joi.boolean(),
  date: Joi.date(),
})

exports.create = {
  body: SCHEMA,
}

exports.read = {}

exports.update = {
  body: SCHEMA,
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}

exports.partiallyUpdate = {
  body: Joi.object().keys({
    name: Joi.string().min(3).max(200),
    author: Joi.string().min(3).max(30),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  }),
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}

exports.remove = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
}

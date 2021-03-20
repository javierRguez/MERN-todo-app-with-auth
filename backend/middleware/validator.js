/* eslint-disable no-console */

module.exports = (validators) => {
  return (req, res, next) => {
    if (!validators) {
      next()
    }
    const errors = []
    Object.keys(validators).forEach((validator) => {
      const { error } = validators[validator].validate(req[validator])
      if (error) {
        errors.push(error)
      }
    })
    if (errors.length > 0) {
      const { details } = errors[0]
      const message = details.map((i) => i.message).join(',')
      console.log('error', message)
      res.status(400).send(message)
    } else {
      next()
    }
  }
}

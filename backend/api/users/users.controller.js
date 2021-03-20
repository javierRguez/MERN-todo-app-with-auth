/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { User } = require('./user.model')

async function signIn(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Invalid email or password...')
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword)
      return res.status(400).send('Invalid email or password...')
    const secretKey = process.env.SECRET_KEY
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      secretKey
    )
    return res.send(token)
  } catch (error) {
    console.log(error.message)
    return res.status(500).send(error.message)
  }
}

exports.signIn = signIn

async function signUp(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email })

    if (user) return res.status(400).send('User with that email already exist')

    const { name, email, password } = req.body
    user = new User({ name, email, password })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
    await user.save()
    const secretKey = process.env.SECRET_KEY
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      secretKey
    )
    return res.send(token)
  } catch (error) {
    console.log(error.message)
    return res.status(500).send(error.message)
  }
}

exports.signUp = signUp

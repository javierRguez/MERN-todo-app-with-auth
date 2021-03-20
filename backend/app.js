require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const router = require('./api/router')

app.use(router)

app.get('/', (req, res) => {
  res.send('belcome to our todos api')
})

const connectionString = process.env.CONNECTION_STRING
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server running on port ${port}..`)
})

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('MongoDB connection established...')
  })
  .catch((err) => {
    console.log('MongoDB connection failed:', err.message)
  })

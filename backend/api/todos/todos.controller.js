/* eslint-disable no-console */
const { Todo } = require('./todo.model')

function returnError(res, status, message) {
  console.log(message)
  return res.status(status).send(message)
}

async function read(req, res) {
  try {
    const todos = await Todo.find().sort({ date: -1 })
    return res.send(todos)
  } catch (error) {
    return returnError(res, 500, error?.message)
  }
}

exports.read = read

async function create(req, res) {
  const { name, author, isComplete, date, uid } = req.body
  let todo = new Todo({
    name,
    author,
    isComplete,
    date,
    uid,
  })

  try {
    todo = await todo.save()
    return res.send(todo)
  } catch (err) {
    return returnError(res, 500, err?.message)
  }
}

exports.create = create

async function update(req, res) {
  try {
    const todo = await Todo.findById(req.params.id)

    if (!todo) return returnError(res, 400, 'Todo not found...')

    const { name, author, isComplete, date, uid } = req.body

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { name, author, isComplete, date, uid },
      { new: true }
    )
    return res.send(updatedTodo)
  } catch (err) {
    return returnError(res, 500, err?.message)
  }
}

exports.update = update

async function partiallyUpdate(req, res) {
  try {
    const todo = await Todo.findById(req.params.id)

    if (!todo) return returnError(res, 400, 'Todo not found...')

    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        isComplete: !todo.isComplete,
      },
      { new: true }
    )
    return res.send(updatedTodo)
  } catch (error) {
    return returnError(res, 500, error?.message)
  }
}

exports.partiallyUpdate = partiallyUpdate

async function remove(req, res) {
  try {
    const todo = await Todo.findById(req.params.id)

    if (!todo) return returnError(res, 400, 'Todo not found...')

    const deletedTodo = await Todo.findByIdAndDelete(req.params.id)
    return res.send(deletedTodo)
  } catch (error) {
    return returnError(res, 500, error?.message)
  }
}

exports.remove = remove

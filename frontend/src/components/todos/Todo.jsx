/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Typography, Button, ButtonGroup } from '@material-ui/core'
import { Create, Delete, CheckCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

import { checkTodo, deleteTodo } from '../../store/actions/todoActions'

const useStyles = makeStyles({
  todoStyle: {
    margin: '20px auto',
    padding: '20px',
    border: '2px solid #bdbdbd',
    borderRadius: '9px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  grayStyle: {
    color: '#8f8f8f',
  },
  isComplete: {
    color: 'green',
  },
  checked: {
    textDecoration: 'line-through',
  },
})

const Todo = ({ todo, setTodo }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const id = todo._id

  const handleUpdateClick = () => {
    setTodo(todo)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const handleCheck = () => {
    dispatch(checkTodo(id))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <>
      <div className={classes.todoStyle}>
        <div>
          {todo.isComplete ? (
            <Typography className={classes.checked} variant="subtitle1">
              {todo.name}
            </Typography>
          ) : (
            <Typography variant="subtitle1">{todo.name}</Typography>
          )}

          <Typography className={classes.grayStyle} variant="body2">
            {`Author: ${todo.author}`}
          </Typography>
          <Typography className={classes.grayStyle} variant="body2">
            Added: {moment(todo.date).fromNow()}
          </Typography>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleCheck()}>
              {todo.isComplete ? (
                <CheckCircle color="action" className={classes.isComplete} />
              ) : (
                <CheckCircle color="action" />
              )}
            </Button>
            <Button onClick={() => handleUpdateClick()}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete()}>
              <Delete color="secondary" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  )
}

export default Todo

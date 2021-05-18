/* eslint-disable no-unused-vars */
import axios from 'axios'
import { toast } from 'react-toastify'
import url from '../../api'

const getTodos = () => {
  return (dispatch) => {
    axios
      .get(`${url}/todos`)
      .then((todos) => {
        dispatch({
          type: 'GET_TODOS',
          todos,
        })
      })
      .catch((error) => {
        console.log(error.response)
      })
  }
}

const addTodo = (newTodo) => {
  return (dispatch, getState) => {
    axios
      .post(`${url}/todos`, newTodo)
      .then((todo) => {
        dispatch({
          type: 'ADD_TODO',
          todo,
        })
      })
      .catch((error) => {
        console.log(error.response)
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      })
  }
}

const updateTodo = (updatedTodo, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/todos/${id}`, updatedTodo)
      .then((todo) => {
        dispatch({
          type: 'UPDATE_TODO',
          todo,
        })
      })
      .catch((error) => {
        console.log(error.response)
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      })
  }
}

const checkTodo = (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/todos/${id}`, {})
      .then((todo) => {
        dispatch({
          type: 'CHECK_TODO',
          todo,
        })
      })
      .catch((error) => {
        console.log(error.response)
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      })
  }
}

const deleteTodo = (id) => {
  console.log('id', id)
  return (dispatch) => {
    axios
      .delete(`${url}/todos/${id}`)
      .then(() => {
        dispatch({
          type: 'DELETE_TODO',
          id,
        })
      })
      .catch((error) => {
        console.log(error.response)
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        })
      })
  }
}

export { addTodo, getTodos, updateTodo, checkTodo, deleteTodo }

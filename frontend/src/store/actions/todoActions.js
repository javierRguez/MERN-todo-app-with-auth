/* eslint-disable no-unused-vars */
import axios from 'axios'
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
      })
  }
}

export { addTodo, getTodos, updateTodo }

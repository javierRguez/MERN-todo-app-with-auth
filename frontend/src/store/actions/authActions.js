import axios from 'axios'
import { toast } from 'react-toastify'
import { url } from '../../api'

const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/users/signup`, user)
      .then((token) => {
        localStorage.setItem('token', token.data)
        dispatch({
          type: 'SIGN_UP',
          token: token.data,
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
const signIn = (creds) => {
  return (dispatch) => {
    axios
      .post(`${url}/users/signin`, creds)
      .then((token) => {
        localStorage.setItem('token', token.data)
        dispatch({
          type: 'SIGN_IN',
          token: token.data,
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

const signOut = () => {
  return (dispatch) => {
    dispatch({ type: 'SIGN_OUT' })
  }
}

const loadUser = () => {
  return (dispatch, getState) => {
    const { token } = getState().auth
    if (token) {
      dispatch({
        type: 'USER_LOADED',
        token,
      })
    } else return null
    return null
  }
}

export { signUp, loadUser, signIn, signOut }

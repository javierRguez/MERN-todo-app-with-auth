/* eslint-disable no-case-declarations */
/* eslint-disable no-underscore-dangle */
import { toast } from 'react-toastify'
import jwtDecode from 'jwt-decode'

const initialState = {
  token: localStorage.getItem('token'),
  name: null,
  email: null,
  _id: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADED':
    case 'SIGN_IN':
    case 'SIGN_UP':
      const user = jwtDecode(action.token)
      toast(`Welcome... ${user.name}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })

      return {
        ...state,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      }
    case 'SIGN_OUT':
      localStorage.removeItem('token')
      toast(`Goodbye... ${state.name || ''}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      return { ...initialState }
    default:
      return { ...state }
  }
}
export default authReducer

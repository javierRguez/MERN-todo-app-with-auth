import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Todos from './components/todos/Todos'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AccessControl from './api/AccessControl'

const RoutesAux = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/"
        element={
          <AccessControl>
            <Todos />
          </AccessControl>
        }
      />
    </Routes>
  )
}

export default RoutesAux

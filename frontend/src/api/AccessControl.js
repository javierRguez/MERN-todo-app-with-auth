/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AccessControl = ({ children }) => {
  const user = useSelector((state) => state.auth._id)
  return <>{user ? children : <Navigate to="/signin" />}</>
}

export default AccessControl

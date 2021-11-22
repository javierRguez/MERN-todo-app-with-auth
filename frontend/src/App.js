import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ToastContainer } from 'react-toastify'
import { loadUser } from './store/actions/authActions'
import Routes from './Routes'

import NavBar from './components/navBar/NavBar'

import 'react-toastify/dist/ReactToastify.css'

const useStyles = makeStyles({
  contentStyle: {
    margin: '30px auto',
  },
})

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  return (
    <BrowserRouter>
      <ToastContainer />
      <Container maxWidth="md">
        <NavBar />
        <Container className={classes.contentStyle} maxWidth="sm">
          <Routes />
        </Container>
      </Container>
    </BrowserRouter>
  )
}

export default App

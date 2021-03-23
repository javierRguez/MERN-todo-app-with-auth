import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: '#fafafa',
    textDecoration: 'none',
  },
  authButton: {},
})

const NavBar = () => {
  const classes = useStyles()
  const history = useHistory()
  const handleSignOut = () => {
    // signOut the user
    history.push('/signin')
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.root} variant="h4">
            <Link className={classes.linkStyle} to="/">
              toDoApp
            </Link>
          </Typography>
          <Typography className={classes.root} variant="subtitle2">
            logged in as Chaoo
          </Typography>
          <Button color="inherit" onClick={() => handleSignOut()}>
            SignOut
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/signin">
              SignIn
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.linkStyle} to="/signup">
              SignUp
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar

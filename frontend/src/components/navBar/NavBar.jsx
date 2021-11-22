import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import { signOut } from '../../store/actions/authActions'

const TypoRoot = styled(Typography)`
  flex-grow: 1;
`
const LinkStyle = styled(Link)`
  color: #fafafa;
  text-decoration: none;
`

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.name)
  console.log(user)
  const handleSignOut = () => {
    dispatch(signOut())
    navigate('/signin')
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <LinkStyle to="/">
            <TypoRoot variant="body2" style={{ fontWeight: 'bolder' }}>
              TODOAPP{' '}
            </TypoRoot>
          </LinkStyle>

          <SearchBar />
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
            <Button color="inherit" onClick={() => handleSignOut()}>
              <Typography variant="body2">SignOut</Typography>
            </Button>
            <Button color="inherit">
              <LinkStyle to="/signin">
                <Typography variant="body2">SignIn</Typography>
              </LinkStyle>
            </Button>
            <Button color="inherit">
              <LinkStyle to="/signup">
                <Typography variant="body2">SignUp</Typography>
              </LinkStyle>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar

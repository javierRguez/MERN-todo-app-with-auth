const url = 'http://localhost:5000/api'
const setHeaders = () => {
  const header = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  }
  return header
}

export { url, setHeaders }

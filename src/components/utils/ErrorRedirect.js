import { Redirect } from 'react-router-dom'

const ErrorRedirect = () => {
  return (
    <Redirect to={{pathname: '/'}}/>
  )
}

export default ErrorRedirect

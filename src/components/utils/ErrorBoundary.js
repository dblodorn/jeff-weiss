import { Component } from 'react'
import { H2 } from './../../styles/components'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }
  render() {
    if (this.state.hasError) {
      return <H2>Oops.. Something went wrong. 😢</H2>
    }
    return this.props.children
  }
}

export default ErrorBoundary

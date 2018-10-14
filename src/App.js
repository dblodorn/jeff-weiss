import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './Routes'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.history.listen(() => {
      window.scrollTo(0, 0)
    })
  }
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Routes/>
      </ConnectedRouter>
    )
  }
}

export default App

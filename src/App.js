import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './Routes'
import { setRandomColor } from './state/actions'
import { scrollWatcher } from './scripts'

class App extends Component {
  constructor(props) {
    super(props)
    scrollWatcher()
    this.props.history.listen(() => {
      window.scrollTo(0, 0)
      this.props.color()
    })
  }
  componentWillMount() {
    window.scrollTo(0, 0)
    this.props.color()
  }
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Routes/>
      </ConnectedRouter>
    )
  }
}

export default connect(
  state => ({
    router: state.router
  }),
  dispatch => ({
    color: () => dispatch(setRandomColor())
  })
)(App)

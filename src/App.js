import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './Routes'
import { setRandomColor, setHeaderState, setRandomFont } from './state/actions'
import { scrollWatcher } from './scripts'
import { breakpoints } from './styles/theme.json'

class App extends Component {
  constructor(props) {
    super(props)
    scrollWatcher()
    this.props.history.listen(() => {
      window.scrollTo(0, 0)
      this.props.color()
      this.props.font()
    })
  }
  componentWillMount() {
    window.scrollTo(0, 0)
    this.props.color()
    this.props.font()
    if (this.props.resize_state.window_width < breakpoints.desktop) {
      this.props.header(false)
    }
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
    router: state.router,
    resize_state: state.resize_state
  }),
  dispatch => ({
    font: () => dispatch(setRandomFont()),
    color: () => dispatch(setRandomColor()),
    header: (bool) => dispatch(setHeaderState(bool))
  })
)(App)

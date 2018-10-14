import { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Node } from 'gl-react'
import { Surface } from 'gl-react-dom'
import timeLoop from './../HOC/timeLoop'
import shaders from './shader-defs'

class HelloBlue extends Component {
  render() {
    const { blue, red } = this.props
    return <Node shader={shaders.helloBlue} uniforms={{ blue, red }} />
  }
}

const Sky = timeLoop(({ time }) => {
  return (
    <HelloBlue
      blue={0.25 + 0.67 * Math.cos(time / 10000)}
      red={0.25 + 0.9 * Math.cos(time / 5000)}
    />
  )
})

class GradientBg extends Component {
  render() {
    return (
      <DesertWrapper>
        <Surface width={this.props.ww} height={this.props.wh}>
          <Sky/>
        </Surface>
      </DesertWrapper>
    )
  }
}

export default connect(
  state => ({
    ww: state.resize_state.window_width,
    wh: state.resize_state.window_height
  })
)(GradientBg)


// STYLES
const DesertWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`

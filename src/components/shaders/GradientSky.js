import { connect } from 'react-redux'
import { Node } from 'gl-react'
import { Surface } from 'gl-react-dom'
import shaders from './shader-defs'
import timeLoop from './../HOC/timeLoop'

const SkyFall = ({ time }) =>
  <Node shader={shaders.gradientSky}
    uniforms={{
      iGlobalTime: time / 1000,
      iResolution:( 100, 1000, 1000)
    }}
  />

export const SkyFallLoop = timeLoop(SkyFall, { frameRate: 60 })

const GradientSky = (props) => {
  return (
    <Surface width={props.ww} height={props.wh}>
      <SkyFallLoop />
    </Surface>
  )
}

export default connect(
  state => ({
    ww: state.resize_state.window_width,
    wh: state.resize_state.window_height
  })
)(GradientSky)

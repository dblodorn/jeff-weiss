import React from 'react'
import { connect } from 'react-redux'
import { PinchView, ReactPinchZoomPan } from 'react-pinch-zoom-pan'
import { ResponsiveWrapper, TextOverlay } from './../../../components'
import { ZoomImgWrapper, ZoomDiv } from './../../../styles/components'
import ZoomModal from './ZoomModal'

const ZoomMobile = props => {
  console.log(props.data)
  
  const getContainerStyle = ratio => {
    return {
      paddingTop: `${ratio.toFixed(2)}%`,
      overflow: `hidden`,
      position: `relative`,
      width: `100%`
    }
  }

  const getInnerStyle = () => {
    return {
      position: `absolute`,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: `auto`
    }
  }
  
  const ratio = (props.data.height / props.data.width) * 100

  return (
    <ZoomDiv>
      <ZoomImgWrapper width={props.data.width} height={props.data.height}>
        <TextOverlay zoom={true} content={`<h2>${(props.data.title !== '') ? props.data.title : props.page_title}</h2><br/>${props.data.text_overlay_content}`} />
        <div className={`pinch-wrapper`}>
          <ReactPinchZoomPan maxScale={2} render={obj => {
            return (
              <div style={getContainerStyle(ratio)}>
                <div style={getInnerStyle()}>
                  <img 
                    src={props.data.image}
                    style={({
                      width: '100%', 
                      height: 'auto', 
                      transform: `scale(${obj.scale}) translateY(${obj.y}px) translateX(${obj.x}px)`,
                      transition: '.3s ease'
                    })} />
                </div>
              </div>
            )
          }} />
        </div>
      </ZoomImgWrapper>
    </ZoomDiv>
  )
}

const Zoom = props =>
  <ResponsiveWrapper
    desktop={
      <ZoomModal data={props.data} page_title={props.title}/>
    }
    mobile={
      <ZoomMobile data={props.data} color={props.color} page_title={props.title}/>
    }
  />

export default connect(
  state => ({
    color: state.color
  })
)(Zoom)
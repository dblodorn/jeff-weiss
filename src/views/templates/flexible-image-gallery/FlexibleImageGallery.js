import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Section, StyledMarkup, Article, CloseWrapper } from './../../../styles/components'
import { flexRowCenteredVert, buttonInit, navWrapperHorizontal, navStyle, flexCenteredAll, opacityTransition } from './../../../styles/mixins'
import { Close, Info, BackArrow } from './../../../components'
import SlideShow from './Slideshow'
import VideoEmbed from './VideoEmbed'
import NotFound from './../../NotFound'
import { spacing, widths, colors, heights } from './../../../styles/theme.json'

const LayoutItem = (props) =>
  <Fragment>
    {(props.show) &&
      <LayoutSection>
        {(props.item.module === 'simple_slideshow' && props.item.slides)
        ? <SlideShow data={props.item} page_title={props.title} count={props.count}/> :
        (props.item.module === 'wysiwig_content')
        ? <WsyWrapper className={props.item.wysiwig_width}>
            <StyledMarkup dangerouslySetInnerHTML={{ __html: props.item.wysiwig }} />
          </WsyWrapper> :
        (props.item.module === 'single_video_photo')
        ? <VideoEmbed data={props.item} page_title={props.title}/> : null
        }
      </LayoutSection>
    }
  </Fragment>

class FlexibleImageGallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: 0,
      layout_count: this.props.data.content.layout.length,
      title: false,
      info_bar: true,
    };
    this._showLayout = this._showLayout.bind(this)
    this._returnTitle = this._returnTitle.bind(this)
    this._showInfo = this._showInfo.bind(this)
    this._hideInfo = this._hideInfo.bind(this)
  }

  _returnTitle = (i) => {
    return this.props.data.content.layout[i].title
  }

  _showLayout = (i) => {
    this.setState({
      layout: i,
      title: this._returnTitle(i)
    })
    setTimeout(() => {
      this._hideInfo()
    }, 1500)
  }

  _showInfo = () => {
    this.setState({
      info_bar: true
    })
  }

  _hideInfo = () => {
    this.setState({
      info_bar: false
    })
  }

  componentWillMount() {
    if (this.state.layout_count > 1) {
      this.setState({
        title: this._returnTitle(this.state.layout)
      })
      setTimeout(() => {
        this._hideInfo()
      }, 3000)
    }
  }

  render() {
    return (
      <Fragment>
        <BackArrow/>
        {(this.state.layout_count > 1) &&
          <LayoutNav className={!this.state.info_bar && `hide`} bgcolor={this.props.color.dark}>
            <GalleryTitle>
              <span>{this.state.title}</span>
            </GalleryTitle>
            <ProjectNav>
              <Title>
                <span>Gallery</span>
              </Title>
              {this.props.data.content.layout.map((item, i) =>
                <IndexB className={(i === this.state.layout) && `active`} onClick={() => this._showLayout(i)} key={`${i}-button-${item.module}`}>
                  <span>{i + 1}</span>
                </IndexB>
              )}
              <CloseWrapper>
                <Close clickFunction={() => this._hideInfo()} color={colors.white} size={`2.5rem`} stroke={3} top={`auto`} position={`relative`} />
              </CloseWrapper>
            </ProjectNav>
          </LayoutNav>
        }
        {(this.state.layout_count > 1) &&
          <InfoWrapper className={this.state.info_bar && 'hide'}>
            <Info clickFunction={() => this._showInfo()} color={colors.white} size={`2rem`} stroke={3} top={`auto`} position={`relative`} />
          </InfoWrapper>
        }
        {(this.props.data.content.layout)
          ? this.props.data.content.layout.map((item, i) => <LayoutItem item={item} title={this.props.data.title} count={this.state.layout_count} show={(i === this.state.layout) && true} key={`${i}-${item.module}`}/>)
          : <NotFound/>
        }
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    header_state: state.header_state,
    color: state.color
  })
)(FlexibleImageGallery)

// STYLES
const LayoutSection = styled(Section)`
  &.hero {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100vh;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &.sidebar {
    width: calc(100% - ${widths.sidebar_desktop});
  }
`

const WsyWrapper = styled(Article)`
  margin: ${spacing.double_pad} auto;
`

const PopupGridWrapper = styled.div`
  padding: ${spacing.double_pad} 0;
`

const LayoutNav = styled.footer`
  ${navWrapperHorizontal};
  ${flexRowCenteredVert};
  bottom: 0;
  left: 0;
  span,
  a,
  label {
    ${opacityTransition};
    opacity: .5;
  }
  &.hide {
    opacity: 0;
    transform: translateY(${heights.header});
  }
  &.show {
    opacity: 1!important;
    transform: translateY(0)!important;
  }
  background-color: ${props => props.bgcolor};
`

const ProjectNav = styled.nav`
  ${flexRowCenteredVert};
  height: 100%;
  margin-left: auto;
`

const IndexB = styled.button`
  ${navStyle};
  ${buttonInit};
  padding: 0 0 0 ${spacing.single_pad};
  &:hover {
    span {
      opacity: 1!important;
    }
  }
  &.active {
    pointer-events: none!important;
    span {
      opacity: 1!important;
    }
  }
`

const Title = styled.label`
  ${navStyle};
  border-right: 1px solid white;
  padding-right: ${spacing.single_pad};
`

const GalleryTitle = styled.h2`
  ${navStyle};
  padding-top: .3rem;
`

const InfoWrapper = styled.div`
  ${flexCenteredAll};
  position: fixed;
  bottom: 0;
  right: 0;
  height: ${heights.header};
  width: ${heights.header};
  z-index: 1000;
  opacity: 1;
  will-change: transform, opacity;
  transition: transform 300ms ease, opacity 300ms ease;
  opacity: .7;
  &:hover {
    opacity: 1;
  }
  &.hide {
    opacity: 0;
    transform: translateX(${heights.header});
  }
`
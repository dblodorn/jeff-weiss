import React, { Component } from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'
import mixin from 'lodash/mixin'
import _ from 'lodash/wrapperLodash'

mixin(_, {
  find: find
})

export default (InnerComponent) => {
  class PostWrapper extends Component {
    constructor(props){
      super(props)
      this.state = {
        project: null,
        style: this.props.style
      }
      this._postFilter = this._postFilter.bind(this);
    }
    _postFilter = (data, route) => {
      let postType = 'pages'
      if (route !== '/') {
        const splitRoute = route.split('/')
        const routeLength = splitRoute.length
        if (routeLength === 3) {
          postType = splitRoute[routeLength - 2]
        } else {
          postType = 'pages'
        }
        return _.find(data[postType], {slug: splitRoute[routeLength - 1]})
      } else {
        return _.find(data[postType], {is_home: true})
      }
    }
    componentWillMount(){
      this.setState({
        project: this._postFilter(
          this.props.data,
          this.props.slug
        )
      })
    }
    render(){
      return (
        <InnerComponent
          {...this.state}
        />
      )
    }
  }
  return connect(
    state => ({
      data: state.api_data.posts,
      slug: state.router.location.pathname,
      router: state.router,
      style: state.header_style
    })
  )(PostWrapper)
}

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPage, setHeaderState } from './../state/actions'
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
      let pageData = {}
      if (route !== '/') {
        const splitRoute = route.split('/')
        const routeLength = splitRoute.length
        if (routeLength === 3) {
          postType = splitRoute[routeLength - 2]
          pageData = _.find(data[postType], { slug: splitRoute[routeLength - 1] })
          this.props.page_type('project')
          this.props.header_state(false)
        } else {
          postType = 'pages'
          pageData = _.find(data['pages'], { slug: splitRoute[routeLength - 1] })
          this.props.page_type(pageData.template)
        }
        return pageData
      } else {
        this.props.page_type('home')
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
    }),
    dispatch => ({
      page_type: (string) => dispatch(setPage(string)),
      header_state: (bool) => dispatch(setHeaderState(bool))
    })
  )(PostWrapper)
}

import React from 'react'
import { Helmet } from 'react-helmet'
import config from './../../config.json'

export default(props) =>
  <Helmet key={window.location.href}>
    <meta charSet="utf-8" />
    <title>{`${config.meta_defaults.title} | ${props.title}`}</title>
    {(props.description) && <meta name="description" content={props.description} />}
  </Helmet>
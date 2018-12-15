import React from 'react'

export default props =>
  <svg height={props.height || '32px'} width={props.width || '32px'} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <title>menu dots</title>
    <g fill="#ffffff">
      <circle cx="16" cy="4" fill="#ffffff" r="3" />
      <circle cx="16" cy="16" r="3" />
      <circle cx="16" cy="28" fill="#ffffff" r="3" />
    </g>
  </svg>
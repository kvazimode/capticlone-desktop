import React from 'react'
import Basic from './basic.jsx'
import Element from './element.jsx'

const type = 
// `simple-text`
// `block`
// `slide`
// `image`
// `rect`
// `text-block`
// `highlight`
`mouse`

export default function Params() {
  return (
    <div className="panel panel-params">
      <Basic />
      <Element type={type} />
    </div>
  )
}

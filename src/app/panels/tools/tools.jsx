import React from 'react'
import Project from './proj.jsx'
import Zoom from './zoom.jsx'
import Element from './element.jsx'
import Order from './order.jsx'

export default () => {
  return <React.Fragment>
    <div className="panel panel-tools">
      tools
      <Project />
      <Zoom />
      <Element />
      <Order />
    </div>
  </React.Fragment>
}


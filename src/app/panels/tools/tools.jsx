import React from 'react'
import Project from './proj.jsx'
import Zoom from './zoom.jsx'
import Element from './element.jsx'
import Order from './order.jsx'
import Align from './align.jsx'

export default () => {
  return <React.Fragment>
    <div className="panel panel-tools">
      <Project />
      <Zoom />
      <Element />
      <Order />
      <Align />
    </div>
  </React.Fragment>
}


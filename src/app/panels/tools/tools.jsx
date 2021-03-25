import React from 'react'
import Project from './proj.jsx'
import Zoom from './zoom.jsx'
import Element from './element.jsx'
import Order from './order.jsx'
import Align from './align.jsx'

export default function Tools() {
  return (
    <div className="panel panel-tools">
      <Project />
      <Zoom />
      <Element />
      <Order />
      <Align />
    </div>
  )
}


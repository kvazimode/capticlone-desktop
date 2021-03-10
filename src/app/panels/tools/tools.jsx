import React from 'react'
import Project from './proj.jsx'
import Zoom from './zoom.jsx'

export default () => {
  return <React.Fragment>
    <div className="panel panel-tools">
      tools
      <Project />
      <Zoom />
    </div>
  </React.Fragment>
}


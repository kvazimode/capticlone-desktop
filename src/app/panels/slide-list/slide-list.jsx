import React from 'react'
import Controls from './controls.jsx'
import Slides from './slides.jsx'

const slides = [
  {
    name: `Slide 001`,
    bg: `bgName1.png`
  },
  {
    name: `Slide 002`,
    bg: `bgName2.png`
  }
]

export default () => {
  return <React.Fragment>
    <div className="panel panel-slidelist">
      slides
      <Controls />
      <Slides slides={slides} />
    </div>
  </React.Fragment>
}

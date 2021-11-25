import React from 'react'
import Controls from './controls.jsx'
import Slides from './slides.jsx'

export default function SlideList(props) {
  return (
    <div className="panel panel-slidelist">
      <Controls handleSlideAdd={props.handleSlideAdd} handleSlideRemove={props.handleSlideRemove}/>
      <Slides
        slides={props.slides}
        currentSlideID={props.currentSlideID}
        slideNameClickHandler={props.slideNameClickHandler}/>
    </div>
  )
}

import React from 'react'
import Header from './header/header.jsx'
import TimelineElement from './timeline-element/timeline-element.jsx'

export default function Timeline(props) {
  if (!props.elements || !props.elements) {
    return <div className="panel panel-timeline"><Header /></div>
  }
  return (
    <div className="panel panel-timeline">
      <Header />
      {props.elements.map((el, num) => {
        return <TimelineElement
          key={num}
          el={el}
          currentEl={props.currentEl}
          elementClickHandler={props.elementClickHandler}
        />
      })}
    </div>
  )
}

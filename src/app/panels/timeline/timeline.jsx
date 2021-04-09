import React from 'react'
import Header from './header/header.jsx'
import TimelineElement from './timeline-element/timeline-element.jsx'



export default function Timeline(props) {

  return (
    <div className="panel panel-timeline">
      <Header />
      {props.slide.elements.map((el, num) => {
        return <TimelineElement key={num} name={el.type} start={el.start} duration={el.duration} />
      })}
    </div>
  )
}

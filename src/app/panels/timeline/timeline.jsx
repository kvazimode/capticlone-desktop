import React from 'react'
import Header from './header/header.jsx'
import TimelineElement from './timeline-element/timeline-element.jsx'

const elements = [
  {
    name: `element1`,
    start: 2000,
    duration: 4000
  },
  {
    name: `element2`,
    start: 1000,
    duration: 3000
  },
]


export default function Timeline() {
  return (
    <div className="panel panel-timeline">
      <Header />
      {elements.map((el, num) => {
        return <TimelineElement key={num} name={el.name} start={el.start} duration={el.duration} />
      })}
    </div>
  )
}

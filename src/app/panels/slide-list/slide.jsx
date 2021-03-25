import React from 'react'

export default function Slide(props) {
    return (
        <div className="slide">
            <span className="slide-name">{props.count + 1}. {props.slide.name}</span>
            <br/>
            <span className="slide-bg">{props.slide.bg}</span>
        </div>
    )
}

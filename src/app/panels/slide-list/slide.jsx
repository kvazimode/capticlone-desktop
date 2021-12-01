import React from 'react'

export default function Slide(props) {
    return (
        <div
        className={`slide ${props.currentSlideID == props.id ? "slide-selected" : ""}`}
        id={props.id}
        onClick={() => (props.slideNameClickHandler(props.id))}>
            <span className="slide-name">{props.index + 1}. {props.slide.name}</span>
            <br/>
            <span className="slide-bg">{props.slide.bgImg}</span>
        </div>
    )
}

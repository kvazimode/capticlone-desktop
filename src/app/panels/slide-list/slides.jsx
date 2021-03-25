import React from 'react'
import Slide from './slide.jsx'

export default function Slides(props) {
    return (
        <div className="block slides-block slides-block--list">
            {props.slides.map((slide, count) => 
                <Slide key={slide.name.toString()} slide={slide} count={count}/>
            )}
        </div>
    )
}

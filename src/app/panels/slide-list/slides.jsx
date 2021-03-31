import React from 'react'
import Slide from './slide.jsx'

export default function Slides(props) {
    return (
        <fieldset>
            <legend>Слайды</legend>
            {props.slides.map((slide, count) => 
                <Slide key={slide.name.toString()} slide={slide} count={count}/>
            )}
        </fieldset>
    )
}

import React from 'react'
import Slide from './slide.jsx'

export default function Slides(props) {
    return (
        <fieldset>
            <legend>Слайды</legend>
            {props.slides.map((slide, i) => 
                <Slide
                key={i}
                slide={slide}
                id={slide.id}
                currentSlideID={props.currentSlideID}
                slideNameClickHandler={props.slideNameClickHandler}
                />
            )}
        </fieldset>
    )
}

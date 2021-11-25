import React from 'react'

export default function Controls(props) {
    return (
        <fieldset>
            <legend>Управление слайдами</legend>
            <button className="button-slides button-slides--add"
                    onClick={() => props.handleSlideAdd()}>До</button>
            <button className="button-slides button-slides--delete"
                    onClick={() => props.handleSlideRemove()}>Уд</button>
            <button className="button-slides button-slides--up">Вв</button>
            <button className="button-slides button-slides--down">Вн</button>
            <button className="button-slides button-slides--rename">Пе</button>
            <button className="button-slides button-slides--copy">Ко</button>
        </fieldset>
    )
}

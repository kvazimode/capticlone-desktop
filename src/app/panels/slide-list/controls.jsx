import React from 'react'

export default function Controls() {
    return (
        <fieldset>
            <legend>Управление слайдами</legend>
            <button className="button-slides button-slides--add">До</button>
            <button className="button-slides button-slides--delete">Уд</button>
            <button className="button-slides button-slides--up">Вв</button>
            <button className="button-slides button-slides--down">Вн</button>
            <button className="button-slides button-slides--rename">Пе</button>
            <button className="button-slides button-slides--copy">Ко</button>
        </fieldset>
    )
}

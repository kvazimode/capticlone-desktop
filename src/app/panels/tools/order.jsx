import React from 'react'

export default function Order() {
    return (
        <fieldset>
            <legend>Слой</legend>
            <button className="button-tools button-order--down">Ниже</button>
            <button className="button-tools button-order--up">Выше</button>
            <button className="button-tools button-order--totop">Вверх</button>
            <button className="button-tools button-order--tobottom">Вниз</button>
        </fieldset>
    )
}

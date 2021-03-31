import React from 'react'

export default function Element() {
    return (
        <fieldset>
            <legend>Добавить объект</legend>
            <button className="button-tools button-element--simple">ПТ</button>
            <button className="button-tools button-element--block">БТ</button>
            <button className="button-tools button-element--highlight">По</button>
            <button className="button-tools button-element--image">Из</button>
            <button className="button-tools button-element--rect">Пр</button>
            <label htmlFor="mouse-checkbox">Мышь</label>
            <input type="checkbox" className="checkbox-mouse" id="mouse-checkbox"></input>
        </fieldset>
    )
}

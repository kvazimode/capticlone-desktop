import React from 'react'

export default function Rect() {
    return <fieldset>
        <legend>Прямоугольник</legend>
        <label htmlFor="rect-color">Цвет: </label>
        <input id="rect-color" type="color"></input>
    </fieldset>
}

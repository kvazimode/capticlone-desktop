import React from 'react'

export default function Transition() {
    return (
        <fieldset>
            <legend>Переход</legend>
            <select id="select-fade" defaultValue={"DEFAULT"}>
                <option value="DEFAULT">Появление</option>
                <option>Появление и исчезновение</option>
                <option>Исчезновение</option>
            </select>
            <label htmlFor="time-fade-in">Появление: </label>
            <input id="time-fade-in" className="param-field param-field--fade" type="number" defaultValue="0"></input>
            <label htmlFor="time-fade-out">Исчезновение: </label>
            <input id="time-fade-out" className="param-field param-field--fade" type="number" defaultValue="0"></input>
        </fieldset>
    )
}

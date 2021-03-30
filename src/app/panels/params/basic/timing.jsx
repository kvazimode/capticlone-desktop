import React from 'react'

export default function Timing() {
    return (
        <fieldset>
            <legend>Время</legend>
            <label htmlFor="timing-start">Начало: </label>
            <input id="timing-start" className="param-field param-field--num" type="number" defaultValue="0"></input>
            <label htmlFor="timing-duration">Продолжительность: </label>
            <input id="timing-duration" className="param-field param-field--num" type="number" defaultValue="0"></input>
        </fieldset>
    )
}

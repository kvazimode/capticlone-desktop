import React from 'react'

export default function Position() {
    return (<fieldset>
        <legend>Позиция, размер</legend>
        <label htmlFor="pos-x">X: </label>
        <input id="pos-x" className="param-field param-field--num" type="number" defaultValue="0"></input>
        <label htmlFor="pos-y">Y: </label>
        <input id="pos-y" className="param-field param-field--num" type="number" defaultValue="0"></input>
        <label htmlFor="pos-width">Ш: </label>
        <input id="pos-width" className="param-field param-field--num" type="number" defaultValue="0"></input>
        <label htmlFor="pos-height">В: </label>
        <input id="pos-height" className="param-field param-field--num" type="number" defaultValue="0"></input>
        <label htmlFor="pos-constrain">Пропорции</label>
        <input id="pos-constrain" type="checkbox"></input>

    </fieldset>)
}


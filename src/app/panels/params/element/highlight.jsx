import React from 'react'

export default function Highlight() {
    return <fieldset>
        <legend>Подсветка</legend>
        <label htmlFor="block-highlight-border-color">Граница: </label>
        <input id="block-highlight-border-color" className="param-field param-field--border-color" type="color" defaultValue="#fff"></input>
        <input id="block-highlight-border-width" className="param-field param-field--border-width" type="number" defaultValue="2"></input>
        <label htmlFor="block-highlight-border-width"> px</label>
        <br/>
        <label htmlFor="block-highlight-fill-color">Тень: </label>
        <input id="block-highlight-fill-color" className="param-field param-field--fill-color" type="color" defaultValue="#fff"></input>
        <label htmlFor="block-highlight-alpha">Прозрачность: </label>
        <input id="block-highlight-alpha" className="param-field param-field--alpha" type="number" defaultValue="2"></input>
    </fieldset>
}


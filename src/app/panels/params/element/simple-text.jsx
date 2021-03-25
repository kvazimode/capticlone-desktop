import React from 'react'

export default function SimpleText() {
    return (
        <fieldset>
            <legend>Простой текст</legend>
            <label htmlFor="simple-text-name">Начало: </label>
            <input id="simple-text-name" className="param-field param-field--text" type="text" defaultValue="simpletext1"></input>
            <label htmlFor="select-font">Шрифт: </label>
            <select id="select-font" defaultValue={"DEFAULT"}>
                <option value="DEFAULT">Arial</option>
                <option>Roboto</option>
                <option>Tahoma</option>
            </select>
            <label htmlFor="simple-text-font-size">Размер: </label>
            <input id="simple-text-font-size" className="param-field param-field--font-size" type="number" defaultValue="14"></input>
            <label htmlFor="simple-text-font-color">Цвет: </label>
            <input id="simple-text-font-color" className="param-field param-field--font-color" type="color" defaultValue="#fff"></input>
            <label htmlFor="text">Содержимое: </label>
            <textarea id="text" type="fieldset" rows="3"></textarea>
        </fieldset>
    )
}

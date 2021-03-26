import React from 'react'

export default function TextBlock() {
    return <fieldset>
        <legend>Блок текста</legend>
            <label htmlFor="block-text-name">Имя: </label>
            <input id="block-text-name" className="param-field param-field--text" type="text" defaultValue="blocktext1"></input>
            <label htmlFor="select-font">Шрифт: </label>
            <select id="select-font" defaultValue={"DEFAULT"}>
                <option value="DEFAULT">Arial</option>
                <option>Roboto</option>
                <option>Tahoma</option>
            </select>
            <label htmlFor="block-text-font-size">Размер: </label>
            <input id="block-text-font-size" className="param-field param-field--font-size" type="number" defaultValue="14"></input>
            <label htmlFor="block-text-font-color">Цвет: </label>
            <input id="block-text-font-color" className="param-field param-field--font-color" type="color" defaultValue="#fff"></input>
            <fieldset>
                <legend>Блок</legend>
                <label htmlFor="block-text-border-color">Граница: </label>
                <input id="block-text-border-color" className="param-field param-field--border-color" type="color" defaultValue="#fff"></input>
                <input id="block-text-border-width" className="param-field param-field--border-width" type="number" defaultValue="2"></input>
                <label htmlFor="block-text-border-width"> px</label>
                <br/>
                <label htmlFor="block-text-fill-color">Заливка: </label>
                <input id="block-text-fill-color" className="param-field param-field--fill-color" type="color" defaultValue="#fff"></input>
            </fieldset>
            
            <label htmlFor="text">Содержимое: </label>
            <textarea id="text" type="fieldset" rows="3"></textarea>
    </fieldset>
}

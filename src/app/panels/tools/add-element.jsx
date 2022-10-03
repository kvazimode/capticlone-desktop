import React from 'react'

export default function AddElement({handleClickElAdd}) {
    return (
        <fieldset>
            <legend>Добавить объект</legend>
            <button id="simple" className="button-tools button-element--simple" onClick={(e) => {handleClickElAdd(e.target.id)}}>ПТ</button>
            <button id="block" className="button-tools button-element--block" onClick={(e) => {handleClickElAdd(e.target.id)}}>БТ</button>
            <button id="highlight" className="button-tools button-element--highlight" onClick={(e) => {handleClickElAdd(e.target.id)}}>По</button>
            <button className="button-tools button-element--image">Из</button>
            <button className="button-tools button-element--rect">Пр</button>
            <label htmlFor="mouse-checkbox">Мышь</label>
            <input type="checkbox" className="checkbox-mouse" id="mouse-checkbox"></input>
        </fieldset>
    )
}

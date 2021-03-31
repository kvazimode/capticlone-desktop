import React from 'react'

export default function Align() {
    return (
        <fieldset>
            <legend>Выравнивание</legend>
            <label htmlFor="select-relative">Относительно: </label>
            <select id="select-relative" defaultValue={"DEFAULT"}>
                <option value="DEFAULT">Слайд</option>
                <option>Последний выделенный</option>
            </select>
            <button className="button-tools button-align--left">Слева</button>
            <button className="button-tools button-align--middle">Посередине</button>
            <button className="button-tools button-align--right">Справа</button>
            <button className="button-tools button-align--top">Наверх</button>
            <button className="button-tools button-align--center">По центру</button>
            <button className="button-tools button-align--bottom">Вниз</button>
        </fieldset>
    )
}

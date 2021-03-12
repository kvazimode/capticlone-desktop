import React from 'react'

export default () => {
    return (
        <div className="block tools-block">
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
        </div>
    )
}

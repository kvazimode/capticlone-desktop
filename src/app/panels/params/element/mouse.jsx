import React from 'react'

export default function Mouse() {
    return <fieldset>
        <legend>Курсор</legend>
        <select defaultValue={"DEFAULT"}>
            <option value="DEFAULT">обычный</option>
            <option>указующий</option>
            <option>перетаскивание</option>
        </select>
        <input id="checkbox-straight" type="checkbox" checked></input>
        <label htmlFor="checkbox-straight">По прямой</label>
        <input id="checkbox-click" type="checkbox"></input>
        <label htmlFor="checkbox-click">Щелчок</label>
        <input id="checkbox-double" type="checkbox"></input>
        <label htmlFor="checkbox-double">Двойной</label>
        <input id="checkbox-visual" type="checkbox"></input>
        <label htmlFor="checkbox-visual">Визуализация</label>
    </fieldset>
}

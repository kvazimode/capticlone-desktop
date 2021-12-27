import React from 'react'

export default function Slide(props) {
    return <fieldset>
        <legend>Слайд</legend>
        <label htmlFor="bgList">Фон: </label>
        <select id="bgList" defaultValue="{DEFAULT}">
            {props.bgList.map((name, count) => {
                if (!name) return
                return <option key={name+count}>{name}</option>
            })}
        </select>
    </fieldset>
}

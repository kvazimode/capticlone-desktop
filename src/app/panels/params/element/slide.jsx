import React from 'react'

export default function Slide(props) {
    return <fieldset>
        <legend>Слайд</legend>
        <label htmlFor="bgList">Фон: </label>
        <select id="bgList" value={'DEFAULT'} onChange={(e) => props.handleBgChange(e.target.value)}>
            <option value="DEFAULT" disabled hidden>Сменить фон</option>
            {props.bgList.map((name, count) => {
                if (!name) return
                return <option key={name+count}>{name}</option>
            })}
        </select>
    </fieldset>
}

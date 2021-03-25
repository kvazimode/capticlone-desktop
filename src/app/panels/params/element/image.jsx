import React from 'react'

export default function Img(props) {
    return <fieldset>
        <legend>Изображение</legend>
        <label htmlFor="bgList">Источник: </label>
        <select id="bgList" defaultValue="{DEFAULT}">
            {props.imgList.map((name, count) => {
                return <option key={name+count}>{name}</option>
            })}
        </select>
    </fieldset>
}

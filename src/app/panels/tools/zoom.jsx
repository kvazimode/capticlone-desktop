import React from 'react'

export default function Zoom() {
    return (
        <fieldset>
            <legend>Масштаб</legend>
            <button className="button-tools button-zoom-in">+</button>
            <span className="value value-zoom">100</span>
            <button className="button-tools button-zoom-out">-</button>
            <select defaultValue={'DEFAULT'}>
                <option value="DEFAULT">100</option>
                <option>50</option>
                <option>75</option>
                <option>150</option>
                <option>200</option>
                <option>400</option>
            </select>
        </fieldset>
    )
}
